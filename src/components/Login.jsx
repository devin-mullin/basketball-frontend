import {useState} from 'react'

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
            r.json().then((user)=>setUser(user))
            alert("welcome to the GREATEST FANTASY BASKETBALL APP EVER CREATED by me")
            setLoggedIn(true);
          } else {
            r.json().then((err)=> setErrors(err.errors))
          }
        })
    }
    
    function doLogOut(){
      fetch("/logout",{
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
      <div>
        <p>glad to see basketball is your favorite sport, too, {user.username}</p>
        <button onClick={doLogOut}>Log Out</button> 
      </div>  
        :
        <form className="m-5 5 5 5 text-center" onSubmit={e => userLogIn(e)}>
        <label>
            Username:
            <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
        </label>
        <span>    </span>
        <label>
            Password:
            <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Log In"/>
        </form>
      }
        </>
    )

      

    
}

export default Login 