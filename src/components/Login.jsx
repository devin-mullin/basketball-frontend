import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

function Login({ user, setUser, loggedIn, setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    function userLogIn(e, saveData){
      e.preventDefault();
      setIsLoading(true);
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, password})
        })
        .then((r)=>{
          setIsLoading(false);
          if (r.ok) {
            r.json().then(data=>{
              localStorage.setItem("token", data.jwt)
              setUser(data)
            })
            alert("welcome to the GREATEST FANTASY BASKETBALL APP EVER CREATED by me")
            setLoggedIn(true);
            setUsername("")
            setPassword("")
          } else {
            r.json().then((err)=> setErrors(err.errors))
          }
        })
    }
    
    function doLogOut(){
      fetch("http://localhost:3000/logout",{
        method: "DELETE",
      })
      .then(()=>{
        setLoggedIn(false)
        setUser([])
        // history('/')
      })
    }


    return(
      <>
      { loggedIn ? 
      <div align="center">
        <p className="text-dark"><strong>glad to see basketball is your favorite sport, too, {user.username}</strong></p>
        <Button variant="outline-danger" align="center" onClick={doLogOut}>Log Out</Button> 
      </div>  
        :
        <Form 
          align="center" 
          display="block"
          className="border border-info p-3 w-25 bg-secondary text-white m-2 2 2 2"
          onSubmit={e => userLogIn(e)}>
            <h4>who are you?</h4>
        <label>
            Username:<span> </span>
            <input className="border border-info rounded m-2 2 2 2 " type="text" id="username" onChange={e => setUsername(e.target.value)}/>
        </label>
        <span>    </span>
        <label>
            Password:<span> </span>
            <input className="border border-info rounded m-2 2 2 2 " type="password" id="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <span> </span>
        <br/>
        <Button align="center" variant="outline-info" className="text-white m-2 2 2 2" type="submit">Log In</Button>
        </Form>
      }
        </>
    )

      

    
}

export default Login 