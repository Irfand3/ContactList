import {call, put, takeEvery, takeLatest} from "redux-saga/effects"

//DELAY FUNCTION TO GIVE A SENSE OF ASYNC CALLING SINCE APPLICATION DOESNT FETCH ANY DATA FROM SERVER
const delay = (ms) => new Promise(res => setTimeout(res, ms))

//FUNCTION CALLED BY SAGA WATCHER, IF SUCCESS WE SEND ID OF CONTACT AS PAYLOAD TO REDUCER TO FILTER IT OUT OF STATE, IF NOT SEND ERROR AS PAYLOAD
function* handleDeleteContact(action){
    try {
        yield delay(1000)
        yield put({type: "DELETE_CONTACT_SUCESS", payload:action.payload})
    } catch (error) {
        yield put({type: "DELETE_CONTACT_FAIL", payload: error.message});
    }
    
}

//FUNCTION TO WATCH FOR EVERY DELETE CONTACT REQUEST ACTION, AND FOR EVERY ACTION CALL HANDLE DELETE CONTACT FUNCTION
function* watcherDeleteContact(){
    yield takeEvery("DELETE_CONTACT_REQUESTED", handleDeleteContact)
}

export default watcherDeleteContact