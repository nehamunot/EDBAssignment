import React from "react";

function CreatePet (props) {
  let CreatePetNode = () => {
    let oSinglePetsData = props.singledata;
    let name = oSinglePetsData.name;
    let species = oSinglePetsData.species;
    let favFood = oSinglePetsData.favFoods;
    let birthYear = oSinglePetsData.birthYear;
    let photo = oSinglePetsData.photo;
    if(!name.trim() || !species.trim() || !favFood.trim() || !birthYear.trim() || !photo.trim()) {
      alert("Please fill all pet information.");
      let oModalDOM = document.getElementById("myModal")
      const att = document.createAttribute("backdrop");
      att.value = "static";
      oModalDOM.setAttributeNode(att);

      return false;
    } else {
      props.createList();
    }
  }

  let oCreatePetInputDOM = (<div className="modal-body">
    <input
      type="text"
      placeholder="Pet Name"
      name="name"
      value={props.singledata.name}
      onChange={props.handleChange}
      required />
    <br/>
    <input
      type="text"
      placeholder="Pet species"
      name="species"
      value={props.singledata.species}
      onChange={props.handleChange}
      required />
    <br/><input
    type="text"
    placeholder="Favorite Food"
    name="favFoods"
    value={props.singledata.favFoods}
    onChange={props.handleChange}
    required/>
    <br/><input
    type="month"
    placeholder="Birth Year"
    name="birthYear"
    value={props.singledata.birthYear}
    onChange={props.handleChange}
    required/>
    <br/><input
    type="text"
    placeholder="Pet Photo URL"
    name="photo"
    onChange={props.handleChange}
    required/>

    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-dismiss="modal"
        onClick={CreatePetNode}
      >
        Create Pet
      </button>
    </div>
  </div>);
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
        data-backdrop="static"
        data-keyboard="false"
      >
        Create New Pet
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                Add New Pet Data
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            {oCreatePetInputDOM}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreatePet;
