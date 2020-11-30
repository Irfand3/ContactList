import { all } from "redux-saga/effects"
import contactSaga from "./contactSaga"
import deleteContactSaga from "./deleteContactSaga"

export default function* rootSaga(){
    yield all([
        contactSaga(),
        deleteContactSaga(),   
    ])
}