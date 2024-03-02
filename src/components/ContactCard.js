import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";

function ContactCard({contact, clickHandler}) {

 const  {id, userName, email} = contact

  return (
    <div key={id} className='card'>
      <div>
      <h3>{userName}</h3>
      <p>{email}</p>
      </div>
      <RiDeleteBin2Line className='deleteIcon' onClick={()=>clickHandler(id)} />
    </div>
  )
}

export default ContactCard