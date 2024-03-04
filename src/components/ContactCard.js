import React from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate} from 'react-router-dom';

function ContactCard({ contact, clickHandler }) {
  const { id, userName, email } = contact;

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/contact/${id}`, {state : contact})
  }
console.log("this from card", contact)
  return (
    <div key={id} className='card'>
      <div>
        <div onClick={handleClick}>
          <h3>{userName}</h3>
          <p>{email}</p>
        </div>
      </div>
      <RiDeleteBin2Line className='deleteIcon' onClick={() => clickHandler(id)} />
    </div>
  );
}

export default ContactCard;
