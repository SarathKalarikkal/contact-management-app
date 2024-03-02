import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import { v4 as uuidv4 } from 'uuid';


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
    <div className="App">
     <Header />
     <div className="container">
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts} removeContact={removeContact}/>
     </div>
    </div>
  );
}

export default App;
