import React from 'react';

function UpdatePet(props) {
  const modalIdentifier = 'update'+props.elementId
  const dataTarget = '#'+modalIdentifier

  let oUpdatePetData =          (   <div className="modal-body">
    <input
      type="text"
      placeholder="Pet Name"
      name="name"
      value={props.singledata.name}
      onChange={props.handleChange}
      required/>
    <br/>
    <input
      type="text"
      placeholder="Pet species"
      name="species"
      value={props.singledata.species}
      onChange={props.handleChange}
      required/>
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
    placeholder="Pet Photo"
    name="photo"
    value={props.singledata.photo}
    onChange={props.handleChange}
    required/>
  </div>);

  return (
    <React.Fragment>

      <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
              onClick={(e)=>props.getList(e,props.elementId)}>Update Pet Data</button>
      <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">Update List</span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            {oUpdatePetData}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={(event)=>props.updateList(event,props.elementId)}>Update</button>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )

}

export default UpdatePet;