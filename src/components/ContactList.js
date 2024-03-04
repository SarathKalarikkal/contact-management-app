import React from 'react'
import ContactCard from "./ContactCard"
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


function ContactList({contacts, removeContact}) {

  const deteContactHandler = (id)=>{
    removeContact(id)
  }

 
const renderList = contacts.map((contact)=>{
  return <ContactCard  contact ={contact} clickHandler={deteContactHandler}/>
})

  return (
    <div className='card-main-box'>
      {contacts.length === 0 ? <div className='message'>No contacts added yet. Please add a new contact.<RiErrorWarningLine  className='errorIcon'/></div> :
       <>
       <p className='userDetails'>User details :</p>
       {renderList}
       </>}
       <Link to={'/contact-management-app'}>
       <button className='addBtn'>Add contact</button>
       </Link>
    </div>
  )
}

export default ContactList