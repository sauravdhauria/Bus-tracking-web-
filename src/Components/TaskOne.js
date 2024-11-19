import React, {useState} from 'react'

const TaskOne = () => {
    const [loginStatus, setLoginStatus]=useState(false);
    const [count, setCount]=useState(0);

    const countPlus=()=>{
        setCount(count+1);
        console.log(count);
    }
    const countMinus=()=>{
        setCount(count-1);
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
        <h1>Task One</h1>
        {
            loginStatus ? (
                <button onClick={signOut}>Sign Out</button>
            ) 
            : 
            (
                <button onClick={signIn}>Sign In</button>
            )
        }

        <h2>Counter</h2>
        <p>Count : {count}</p> 
        <button onClick={countPlus}> Increase</button>  
        <button onClick={countMinus}> Decrease</button>  

    </div>
  )
}

export default TaskOne