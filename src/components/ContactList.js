import React, {useEffect}  from 'react'
import Contact from './Contact'
import {connect} from "react-redux"
import {getContacts} from "../actions/contactActions"




const ContactList = ({contact:{contacts}} ) => {
    
  //GET CONTACTS FROM STATE, MAP THROUGH THEM AND SEND EACH CONTACT AS A PROPERTY TO CONTACT COMPONENT
    
    return (
        <div style={contactStyle}>
        {
           contacts.length === 0 ? ( 
            <p className="h6">Your Contact List is empty...</p>
          ) : (
        contacts.map(person => {
        return <Contact person={person} key={person.id}/>
        })
        )
        
    
      }
        </div>

        
        
    )
}

//CUSTOM STYLE FOR DISPLAYING CONTACT LIST
const contactStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
    marginTop:"25px"
}
const mapStateToProps = state => ({
    contact:state.contacts,
   
})

export default connect(mapStateToProps)(ContactList)
