import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CreateUser(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    let navigate = useNavigate()

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
        .then(data=>{
            localStorage.setItem("token", data.jwt)
            alert('congrats on signing up for the BEST fantasy app ever made by a guy who is me')
            navigate('/')
        }
        )
    }


    return(
        <Form 
        align="center" 
        display="block"
        className="login" 
        onSubmit={userCreate}>
            <h4>create your credentials:</h4>
        <label>
            Username:<span> </span>
            <input type="text" 
            name="username" 
            className="label"
            onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
            Password:<span> </span>
            <input type="text" 
            name="password" 
            className="label"
            onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <label>
            Confirm Password:<span> </span> 
            <input type="text" 
            name="password" 
            className="label"
            onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
        </label>
        <br/>
        <Button 
        type="submit" 
        variant="outline-info"
        className="border border-info rounded text-white m-2 2 2 2 "
        >
        Sign Up
        </Button>
        </Form>
    )
}

export default CreateUser