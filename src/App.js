import React from "react"
import { Fragment } from "react";
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store"
import ContactList from "./components/ContactList";
import Header from "./components/Header"
import ContactForm from "./components/ContactForm";
import UpdateContact from "./components/UpdateContact"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <div className="container">
       <Route  exact path="/" component={ContactList}/>
       <Route   path="/createContact" component={ContactForm}/>
       <Route  path="/update/:id" component={UpdateContact}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
