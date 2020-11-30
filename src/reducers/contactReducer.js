const initialState = {
    contacts: [],
    current: null,
    load:false,
    error:null
}

export default (state = initialState, action) => {

    switch(action.type){

        //didnt use since we dont get any contacts from server, all contacts are kept in contacts state
       /*  case "GET_CONTACT_REQUESTED":
            return{
                ...state
            }
        case "GET_CONTACT_SUCCESS":
            return{
                ...state,
                contacts: action.payload
            } */

        
        //ADD CONTACT REDUCERS WITH SAGA
        case "ADD_CONTACT_REQUESTED":
            return{
                ...state,
                load:true
            }
     
         case "ADD_CONTACT_SUCCESS":
            return{
                ...state,
                contacts:[...state.contacts,action.payload], 
                load:false
            }
        case "ADD_CONTACT_FAIL":
            return{
                ...state,
                error:action.payload
            }

        
        //DELETE CONTACT REDUCERS WITH SAGA
        case "DELETE_CONTACT_REQUEST":
            return{
                 ...state,
                 load:true
             }

        case "DELETE_CONTACT_SUCESS":
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact !== action.payload), 
                load:false
            }
        case "DELETE_CONTACT_FAIL":
            return{
                ...state,
                error:action.payload
            }

        
        //UPDATE CONTACT REDUCER, IMPLEMENTED JUST IN REDUX
        case "UPDATE_CONTACT":
            return{
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact), 
                load:false
            }
        
        //SET CURRENT REFERS TO CONTACT TO UPDATE
        case "SET_CURRENT":
            return{
                ...state,
                current:action.payload,
                load:false
            }
          
        case "SET_CURRENT_NULL":
            return{
                ...state,
                current:null,
                
            }
        default:
            return state;

    }

}