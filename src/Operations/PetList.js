import React from 'react'
import UpdatePet from './UpdatePet';
import DeletePet from './DeletePet';

function PetList(props) {
  var rows = [];
  props.alldata.forEach(element => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.species}</td>
        <td>{element.favFoods}</td>
        <td>{element.birthYear}</td>
        <td><img src={element.photo} alt={""} style={{
          "width": "50px",
          "height": "50px"
        }}/></td>
        <td>
          <UpdatePet
          elementId={element.id}
          singledata={props.singledata}
          getList={props.getList}
          updateList={props.updateList}
          handleChange={props.handleChange}/>
        </td>
        <td>
          <DeletePet
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}/>
        </td>
      </tr>)
  });
  return(
    <table className="table table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>species</th>
        <th>Favorite Foods</th>
        <th>Birth Year</th>
        <th>Photo</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default PetList;