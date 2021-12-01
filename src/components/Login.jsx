
function Login({ setUser, loggedIn, setLoggedIn, saveData, setSaveData }) {
    

    function userLogIn(saveData){
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveData)
        })
        .then(r => r.json())
        .then( (user) => {
          setUser(user)
        user.username === saveData.username? setLoggedIn(!loggedIn) : alert(user.error)
        })
    }
    
    function doLogOut(){
      fetch("/logout",{
        method: "DELETE",
      })
      .then(()=>{
        setLoggedIn(!loggedIn)
        setUser([])
        // history('/')
      })
    }

    function logInData(e){
        e.preventDefault()
        userLogIn(saveData)
    }

    function handleChange(e){
        setSaveData({...saveData, 
            [e.target.name]: e.target.value
        })
    }

    return(
        <form className="m-5 5 5 5 text-center" onSubmit={e => logInData(e)}>
        <label>
            Username:
            <input type="text" name="username" onChange={(e)=> handleChange(e)}/>
        </label>
        <span>    </span>
        <label>
            Password:
            <input type="text" name="password" onChange={(e)=> handleChange(e)}/>
        </label>
        <input type="submit" value="Log In"/>
        </form>
    )
}

export default Login 