import React, {useState} from 'react'

const TaskOne = () => {
    const [email, setEmail]=useState("");
    const [name, setName]=useState("");
    const [mobile, setMobile]=useState("");

    const submitData=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(name);
        console.log(mobile);
    }
    
  return (
    <div>
        <h1>Task Two</h1>
       <form onSubmit={submitData}>
       <input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter E-Mail' value={email} required/>
       <input type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' value={name} required/>
       <input type='text' onChange={(e)=>{setMobile(e.target.value)}} placeholder='Enter Mobile' value={mobile} required/>

        <button type='submit'>Submit</button>


       </form>
    </div>
  )
}

export default TaskOne