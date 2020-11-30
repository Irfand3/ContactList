
/* export const getContacts = () => {
    
   return (dispatch) => {
            dispatch({
                type: "GET_CONTACT_REQUESTED",
            })        
    }  
} 
 */

 //ADD CONTACT ACTION, SEND NEW CONTACT AS PAYLOAD
export const addContact = (newContact) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CONTACT_REQUESTED",
            payload:newContact
        })
    }
}

//DELETE CONTACT ACTION, SEND ID OF CONTACT AS PAYLOAD
export const deleteContact = (id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_CONTACT_REQUESTED",
            payload:id
        })
    }
}

//SET CURRENT ACTION, SEND CONTACT THAT WILL BE UPDATED AS PAYLOAD
export const setCurrent = (contactToCurrent) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT",
            payload:contactToCurrent
        })
    }
}

//SET CURRENT NULL ACTION, JUST RETURN CURRENT STATE AS NULL
export const setCurrentNull = () => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT_NULL",
        })
    }
}

//UPDATE ACTION, SEND CONTACT THAT WILL BE UPDATED WITH NEW VALUES AND SAME ID AS PAYLOAD
export const update = (contactToUpdate) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CONTACT",
            payload:contactToUpdate
        })
    }
}