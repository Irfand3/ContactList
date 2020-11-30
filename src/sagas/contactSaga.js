import {call, put, takeEvery} from "redux-saga/effects"

//DELAY FUNCTION TO GIVE A SENSE OF ASYNC CALLING SINCE APPLICATION DOESNT FETCH ANY DATA FROM SERVER
const delay = (ms) => new Promise(res => setTimeout(res, ms))

//FUNCTION CALLED BY SAGA WATCHER, IF SUCCESS WE SEND CONTACT AS PAYLOAD TO REDUCER, IF NOT SEND ERROR AS PAYLOAD
function* handleAddContact(action){
    try {
        yield delay(1000)
        yield put({type: "ADD_CONTACT_SUCCESS", payload:action.payload})
    } catch (error) {
        yield put({type: "ADD_CONTACT_FAIL", payload: error.message});
    }
    
}

//FUNCTION TO WATCH FOR EVERY ADD CONTACT REQUEST ACTION, AND FOR EVERY ACTION CALL HANDLE ADD CONTACT FUNCTION
function* watcherAddContact(){
    yield takeEvery("ADD_CONTACT_REQUESTED", handleAddContact)
}



export default watcherAddContact;
