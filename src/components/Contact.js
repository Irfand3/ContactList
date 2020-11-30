import React from 'react'
import {deleteContact} from "../actions/contactActions"
import {setCurrent} from "../actions/contactActions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const Contact = ({person, deleteContact, setCurrent}) => {

  //PERSON PROPERTY SENT FROM CONTACTLIST COMPONENT
  console.log(person)

  // FIRE DELETE ACTION BY CLICKINNG ON DELETE BUTTON
  const onDelete = () => {
    deleteContact(person)
    alert("Deleted: " + person.name)
  }

  //FIRE SET CURRENT ACTION BY CLICKING ON UPDATE BUTTON, TO SET CONTACT TO UPDATE
  const onUpdate = () => {
    setCurrent(person)
  }
    
    return (
      
        <div>

<div className="card bg-light mb-3" style={{width:"22rem"}}>
    <div className="card-header"><i className="fas fa-user fa-2x"><span className="ml-3">{person.name}</span></i></div>
  <div className="card-body">
    
    <p className="card-text"><strong>Number:</strong> {person.number}</p>
    <p className="card-text"><strong>Address:</strong> {person.address}</p>
    <p className="card-text"><strong>Email:</strong> {person.email}</p>
    <p className="card-text"><strong>Company:</strong> {person.company}</p>
    <div className="row">
        <div className="col">
        
        <button type="button" className="btn btn-warning btn-block" onClick={onUpdate}>
        <Link to={`/update/${person.id}`} className="text-white">Update</Link></button> 
        </div>
        <div className="col">
        <button type="button" className="btn btn-danger btn-block" onClick={onDelete}>Delete</button>
        </div>
    </div>
  </div>
 
</div>        
        </div>
    )
}



export default connect(null,{deleteContact, setCurrent})(Contact)
