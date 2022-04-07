import React from 'react';

function DeletePet (props) {
  const modalIdentifier = 'delete' + props.elementId;
  const dataTarget = '#' + modalIdentifier;

  let oDeletedPetData = (
    <div className="modal-body">
      <input
        type="text"
        placeholder="Pet Name"
        name="name"
        value={props.singledata.name}/>
      <br/>
      <input
        type="text"
        placeholder="Pet species"
        name="species"
        value={props.singledata.species}/>
      <br/>
      <input
      type="text"
      placeholder="Favorite Food"
      name="favFoods"
      value={props.singledata.favFoods}/>
      <br/><input
      type="month"
      placeholder="Birth Year"
      name="birthYear"
      value={props.singledata.birthYear}/>
      <br/><input
      type="text"
      placeholder="Pet Photo"
      name="photo"
      value={props.singledata.photo}/>
    </div>
  );


  return (
    <React.Fragment>

      <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
              onClick={(e) => props.getList(e, props.elementId)}>Delete
      </button>
      <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">Delete List</span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            {oDeletedPetData}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={(event) => props.deleteList(event, props.elementId)}>Delete
              </button>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )

}

export default DeletePet;