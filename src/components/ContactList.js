import React from 'react'
import ContactCard from "./ContactCard"
import { RiErrorWarningLine } from "react-icons/ri";

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
    </div>
  )
}

export default ContactList