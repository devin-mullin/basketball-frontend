import { useState } from 'react'
import { Form, Field } from 'react-final-form'

function CreateUser(){
    const [saveData, setSaveData] = useState({
        username: "",
        password: ""
    })

    function userCreate(saveData){
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveData)
        })
        .then(r => r.json())
        .then(alert('congrats on signing up for the BEST fantasy app ever made by a guy who is me'))
    }
    
    function logInData(e){
        e.preventDefault()
        userCreate(saveData)
    }

    function handleChange(e){
        setSaveData({...saveData, 
            [e.target.name]: e.target.value
        })
    }

    return(
        <form onSubmit={e => logInData(e)}>
        <label>
            Username:
            <input type="text" name="username" onChange={(e)=> handleChange(e)}/>
        </label>
        <label>
            Password:
            <input type="text" name="password" onChange={(e)=> handleChange(e)}/>
        </label>
        <input type="submit" value="Sign Up"/>
        </form>
    )
}

export default CreateUser