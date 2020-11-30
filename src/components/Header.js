import React from 'react'
import {Link} from "react-router-dom"


//NAVBAR 
const header = () => {
    return (
        <div>
  <nav className="navbar navbar-light bg-light">
    <div className="container">
    <Link to="/" className="navbar-brand mb-0 h1">Contacts</Link>  
    <Link to="createContact" className="text-dark"><h6>Add Contact</h6></Link>
    </div>
  </nav>            
        </div>
    )
}

export default header
