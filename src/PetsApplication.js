import React, {useEffect, useState} from "react";
import CreatePet from "./Operations/CreatePet";
import PetList from "./Operations/PetList";

function PetsApplication (props) {
  let [allPetsData, setAllPetsData] = useState([]);
  let [singlePetsData, setSinglePetsData] = useState({
    name: "",
    species: "",
    favFoods: "",
    birthYear: "",
    photo: ""
  });

  useEffect(() => {
    fetch("http://localhost:3002/pets")
      .then(res => res.json())
      .then(result =>
        setAllPetsData(result)
      )
      .catch(console.log);
  }, []);

  let getPetsLists = () => {
    fetch("http://localhost:3002/pets")
      .then(res => res.json())
      .then(result =>
        setAllPetsData(result)
      )
      .catch(console.log);
  }

  let handleChange = (event) => {
    let name = singlePetsData.name;
    let species = singlePetsData.species;
    let favFood = singlePetsData.favFoods;
    let birthYear = singlePetsData.birthYear;
    let photo = singlePetsData.photo;
    switch (event.target.name) {
      case "name" : name = event.target.value;
      break;
      case "species" : species = event.target.value;
      break;
      case "favFoods" : favFood = event.target.value;
      break;
      case "birthYear" : birthYear = event.target.value;
      break;
      case "photo" : photo = event.target.value;
      break;
    }
    setSinglePetsData({
      name: name,
      species: species,
      favFoods: favFood,
      birthYear: birthYear,
      photo: photo
    });
  }

  let CreatePetNode = () => {
    fetch("http://localhost:3002/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singlePetsData)
    }).then((result) => {
      setSinglePetsData({
        name: "",
        species: "",
        favFoods: [],
        birthYear: "",
        photo: ""
      })
      getPetsLists();
    });
  }

  let getPetDataByID = (event, id) => {
    fetch("http://localhost:3002/pets/" + id)
      .then(res => res.json())
      .then(result => {
          setSinglePetsData(
            {
              "id": result.id,
              "name": result.name,
              "species": result.species,
              "favFoods": result.favFoods,
              "birthYear": result.birthYear,
              "photo": result.photo
            });
        }
      );
  }

  let UpdatePetDataById = (event, id) => {
    fetch("http://localhost:3002/pets/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singlePetsData)
    })
      .then(res => res.json())
      .then(result => {
        setSinglePetsData(
          {
            name: "",
            species: "",
            favFoods: [],
            birthYear: "",
            photo: ""
          })
        getPetsLists();
      });
  }

  let deletePetById = (event, id) => {
    fetch("http://localhost:3002/pets/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        setSinglePetsData(
          {
            name: "",
            species: "",
            favFoods: [],
            birthYear: "",
            photo: ""
          })
        getPetsLists();
      });
  }


  const listTable = <PetList
    alldata={allPetsData}
    singledata={singlePetsData}
    getList={getPetDataByID}
    updateList={UpdatePetDataById}
    deleteList={deletePetById}
    handleChange={handleChange}
  />;
  return (
    <div className="container">
        <div className="title-bar">
          <CreatePet
            singledata={singlePetsData}
            createList={CreatePetNode}
            handleChange={handleChange}
          />
        </div>
      <br/>
      {listTable}
    </div>
  );
}

export default PetsApplication;