import React , {useState}from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import { setCurrent, update } from '../actions/contactActions'
import { setCurrentNull } from '../actions/contactActions'

const UpdateContact = ({contactToUpdate, update, setCurrentNull}) => {

    //DECLARATION OF STATES THAT WILL BE FILLED IN FORM
   const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("") 

    
    //CHECK IF VALUES ARE BLANK, IF NOT => SAVE ID FROM THE CURRENT STATE, FILL OTHER FIELDS WITH NEW VALUES, FIRE UPDATE ACTION AND SET CURRENT TO NULL
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || number === "" || address === "" || email === "" || company === "" )
        {
            alert("Some of fields are blank")
        }
        else{

        try {
            const contact = {
                id:contactToUpdate.id,
                number:number,
                name:name,
                address:address,
                email:email,
                company:company
            }
            update(contact)
            alert("Contact Updated")
            setCurrentNull()
           
        } catch (error) {
            alert(error)
        }
    }
        
    }

    return (
      
  
        <div className="mt-5">
             {contactToUpdate === null ? (<Link to="/" className="navbar-brand mb-0 h1">Go Back</Link>  )
            
            : (
        <div className="card m-auto"  style={{width:"30rem"}}> 
        <div className="card-header"><i className="fas fa-user fa-2x">  Update Contact: {contactToUpdate.name}</i></div>
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
             <input type="submit" value="Submit" className="mt-2 btn btn-warning btn-block"/>
             <h6 className="text-center mt-2"><Link to="/" >Go back to main</Link></h6> 
            </form>
            </div>  
        </div>
          )}
        </div>
           
        
        



       
        
    )
}

const mapStateToProps = state => ({
    contactToUpdate:state.contacts.current,
   
})

export default connect(mapStateToProps, {update, setCurrentNull})(UpdateContact)
