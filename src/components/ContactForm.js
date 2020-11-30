import React, {useState} from 'react'
import {addContact} from "../actions/contactActions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import nextId from "react-id-generator"

const ContactForm = ({addContact}) => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
   
    
    //CHECK IF ANY FIELD IS BLANK, IF NOT => CREATE NEW VARIABLE, ADD VALUES FROM INPUT AND FIRE ADD CONTACT ACTION
    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === "" || number === "" || address === "" || email === "" || company === "" )
        {
            alert("Some of fields are blank")
        }
        else
        {
        try {
            const newContact = {
                id:nextId(),
                number:number,
                name:name,
                address:address,
                email:email,
                company:company
            }
            addContact(newContact)
            alert("Contact Added")
            
            
        } catch (error) {
            alert(error)
        }
    }
        
        
    }

    return (
        <div className="mt-5">
        <div className="card m-auto"  style={{width:"30rem"}}> 
        <div className="card-header"><i className="fas fa-user fa-2x">  Add Contact</i></div>
        <div className="card-body m-auto">
        
            <form onSubmit={handleSubmit}>
            <p className="text-center h6">Name:</p>
            <input
            type="text"
             value={name}
             className="form-control"
             onChange={e => setName(e.target.value)}
            />
             <p className="text-center h6 mt-3">Phone number:</p>
            <input
            type="text"
             value={number}
             className="form-control"
             onChange={e => setNumber(e.target.value)}
            />
             <p className="text-center h6 mt-3">Address:</p>
            <input
            type="text"
             value={address}
             className="form-control"
             onChange={e => setAddress(e.target.value)}
            />
            <p className="text-center h6 mt-3">Email:</p>
            <input
            type="text"
             value={email}
             className="form-control"
             onChange={e => setEmail(e.target.value)}
            />
            <p className="text-center h6 mt-3">Company:</p>
            <input
            type="text"
             value={company}
             className="form-control"
             onChange={e => setCompany(e.target.value)}
            />
            <br/>
             <input type="submit" value="Submit" className="mt-2 btn btn-success btn-block"/>
             
            </form>
            </div>  
        </div>
        </div>
    )
}
export default connect(null,{addContact})(ContactForm)
