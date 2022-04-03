import React, { useState } from 'react'
import Axios from "axios";
function TestForm() {

    const [name, setname] = useState('');
    const nameChange=(e)=>{
        setname(e.target.value);
    }
    const [password, setpassword] = useState('');
    const passwordChange=(e)=>{
        setpassword(e.target.value);
    }
    const handleChange=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/test',{
            name:name,
            password:password
        }).then(()=>{
            console.log('Sucess')
        })
    }
  return (
    <div>
       <form action="" onSubmit={handleChange}>
           <div>
           <label htmlFor="">name</label>
           <input type="text" onChange={nameChange} />
           </div>
           <div>
               <label htmlFor="">password</label>
               <input type="text" onChange={passwordChange} />
           </div>
           <div>
               <button type='submit'>Save</button>
           </div>
       </form>
    </div>
  )
}

export default TestForm