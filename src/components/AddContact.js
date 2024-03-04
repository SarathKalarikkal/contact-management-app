import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AddContact(props) {

const {addContactHandler} = props
const navigate = useNavigate();

  const [formValue, setFormValue]= useState({
    userName : "",
    email : ""
  })

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(formValue.userName === "" || formValue.email === ""){
      alert("Please fill all the fields")
      return
    }

    addContactHandler(formValue)
     setFormValue({
      userName : "",
      email : ""
    })
     
    navigate('/showList');

  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <div className="input-group">
         <label htmlFor="userName">Name</label>
         <input type="text" name="userName" id="userName" placeholder='Enter the name' value={formValue.userName}  onChange={(e)=>setFormValue({...formValue,userName : e.target.value})}/>
       </div>
       <div className="input-group">
         <label htmlFor="email">Email</label>
         <input type="email" name="email" id="email" placeholder='Enter the email address' value={formValue.email} onChange={(e)=>setFormValue({...formValue,email : e.target.value})}/>
       </div>
       <button type='submit'>Add contact</button>
     </form>
    </div>
  )
}

export default AddContact
