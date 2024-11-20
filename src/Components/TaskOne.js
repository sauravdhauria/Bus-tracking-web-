import { Color } from 'antd/es/color-picker';
import React, { useState } from 'react'

const TaskOne = () => {
    const[loginStatus, setLoginStatus]= useState(false);
    const [count , setCount] = useState(0);
    
    const countPlus=()=>{
        setCount(count+1);
        console.log(count);
      }
      const countDecrese=()=>{
        setCount(count-1);
        console.log(count);
      }
      const countDouble=()=>{
        setCount(count+2);
        console.log(count);
      }
      const signIn=()=>{
        setLoginStatus(true);
        console.log(loginStatus);

      }
      const signOut=()=>{
        setLoginStatus(false);
        console.log(loginStatus);
      }
      

  return (
    <div>
       <h1>
         TaskOne
       </h1>
       <p>Login status {loginStatus} </p>
       {loginStatus ? (<button onClick={signOut}>Sign Out</button>) :(<button onClick={signIn}>Sign In</button>)}


       <h2>Count : {count}</h2>
       <button onClick={countPlus}>Increase</button>
       <button onClick={countDecrese}>Decrese</button>
       <button onClick={countDouble}>Double</button>


    </div>

    

)
}

export default TaskOne