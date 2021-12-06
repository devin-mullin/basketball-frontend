import { useState } from 'react'

function CreateUser(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");



    function userCreate(e){
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation
          })
        })
        .then(r => r.json())
        .then(alert('congrats on signing up for the BEST fantasy app ever made by a guy who is me'))
    }


    return(
        <form onSubmit={userCreate}>
        <label>
            Username:
            <input type="text" name="username" 
            onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="text" name="password" 
            onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <label>
            Confirm Password:
            <input type="text" name="password" 
            onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
        </label>
        <input type="submit" value="Sign Up"/>
        </form>
    )
}

export default CreateUser