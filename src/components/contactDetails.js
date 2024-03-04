import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { TiArrowBackOutline } from "react-icons/ti";

function ContactDetails() {
    
    const location = useLocation();
 const contact = location.state;

 return (
    <div className='contactDetail'>
      <h2>Contact Details</h2>
      <p>ID: {contact?.id}</p>
      <div>
        <p>Name: {contact?.userName}</p> 
        <p>Email: {contact?.email}</p> 
      </div>
      <Link to={'/showList'}>
        <TiArrowBackOutline className='backIcon'/>
      </Link>
    </div>
 );
}

export default ContactDetails;