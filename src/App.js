import { useEffect, useState } from "react"
import NbaTeamsContainer from './components/NbaTeamsContainer'
import NbaTeam from './components/NbaTeam'
import MyTeam from './components/MyTeam'
import Login from './components/Login'
import './components/App.css'
import CreateUser from './components/CreateUser'
import Player from './components/Player'
import CommunityTeamsContainer from './components/CommunityTeamsContainer'
import RecentGamesContainer from './components/RecentGamesContainer'
import NavBar from "./components/NavBar";
import Search from "./components/Search"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'
import { fetchMyTeams } from './components/redux/myTeamSlice'
import nba from './components/img/nba.png'

function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [games, getGames] = useState({})
  const [selectedTeam, setSelectedTeam] = useState([])

  useEffect(()=>{
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard#')
    .then(r=>r.json())
    .then(data=>getGames(data))
}, [])




  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`https://nameless-ravine-11360.herokuapp.com/auto_login`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(data=> {
        setLoggedIn(true)
        setUser(data)
      })
    }
  },[])

  useEffect(()=>{
      dispatch(fetchTeams())    
  }, [])
  
  useEffect(()=>{
    dispatch(fetchPlayers())  
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchMyTeams())
  }, [dispatch])







  return (

      <div className="App">
        <NavBar loggedIn={loggedIn}/>
      <div className="logo">
        <h1
        alt="devy league fantasy basketball version 0.5"
        onClick={()=>navigate('/')}
        style={{cursor: 'pointer'}}
        >devyleague fantasy basketball v0.5</h1> 
      </div>
      {loggedIn ? <Login 
        user={user}
        setUser={setUser} 
        loggedIn={loggedIn} 
        setLoggedIn={setLoggedIn}
      />
        : null
    }
      <Search />
      <br />
      
      <Routes>
      <Route path='/login' 
                element={<Login
                user={user}
                setUser={setUser} 
                loggedIn={loggedIn} 
                setLoggedIn={setLoggedIn}
      />}/>           
      <Route 
            path='/sign-up' 
            element={<CreateUser/>}/>
      <Route 
              exact path='/nba-teams' 
              element={<NbaTeamsContainer />} />
      <Route 
              path ='nba-teams/:id' 
              element={<NbaTeam 
                        selectedTeam={selectedTeam} />}/>
      <Route 
              path='/players/:id' 
              element={<Player 
                        selectedTeam={selectedTeam}
                        loggedIn={loggedIn}/>}/>
      <Route 
              path='/my-team' 
              element={<MyTeam 
                        user={user} 
                        setSelectedTeam={setSelectedTeam} 
                        selectedTeam={selectedTeam} />} />
      <Route 
              path='/community' 
              element={<CommunityTeamsContainer />} />
       <Route 
              path='/box-scores' 
              element={<RecentGamesContainer 
                        games={games}/>} /> 
        <Route 
              exact path='/players' 
              component={Player}/>
        <Route 
              path='/players/:id' 
              component={Player}/>
      </Routes>
      <br/>
    <img 
      src={nba} 
      onClick={()=>window.open('https://www.nba.com')}
      alt="link to NBA.com"
      style={{ cursor: 'pointer' }}
      />
      </div>
  );
}

export default App;
