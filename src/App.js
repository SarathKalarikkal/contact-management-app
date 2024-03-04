import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactDetails from './components/contactDetails';


function App() {

  const [contacts, setContacts] = useState([])
  const LOCAL_STORAGE_KEY = "contacts"

  const addContactHandler =(contact)=>{
    setContacts([...contacts, {id : uuidv4(), ...contact}])
  }

  const removeContact=(id)=>{
   const newContactList = contacts.filter((contact)=>{
    return contact.id !== id
   })

   setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  

  return (
    <Router>
      <div className="App">
     <Header />
      
      <div className="container">
      <Routes>
        <Route path='/contact-management-app' exact element={<AddContact  addContactHandler={addContactHandler}/>} />
        <Route path='/showList' exact element={<ContactList  contacts={contacts} removeContact={removeContact}/>} />
        <Route path='/contact/:id'  element={<ContactDetails />}/>
      </Routes>
     </div>
      
    </div>
    </Router>
  );
}

export default App;
