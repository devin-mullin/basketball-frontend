import { useEffect, useState } from "react"
import './App.css';
import NbaTeamsContainer from './components/NbaTeamsContainer'
import NbaTeam from './components/NbaTeam'
import MyTeam from './components/MyTeam'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Player from './components/Player'
import CommunityTeamsContainer from './components/CommunityTeamsContainer'
import RecentGamesContainer from './components/RecentGamesContainer'
import NavBar from "./components/NavBar";
import Search from "./components/Search"
import { Routes, Route, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'
import { fetchMyTeams } from './components/redux/myTeamSlice'
import { getTeamPlayers } from './components/redux/myTeamPlayerSlice'
import "tailwindcss/tailwind.css"

function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [saveData, setSaveData] = useState({})

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(()=>{
      dispatch(fetchTeams())    
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchPlayers())  
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchMyTeams())
  }, [dispatch])

  useEffect(()=>{
    dispatch(getTeamPlayers())
  }, [dispatch])

  useEffect(()=>{
    fetch('/auth')
    .then(res=>{
      if(res.ok){
       res.json().then(user=>setUser(user)) 
      }
    })
  })

 if(!user) return <Login setUser={setUser}/>

  return (

      <div className="App">
      <Login 
          user={user}
          setUser={setUser} 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn}
          saveData={saveData} 
          setSaveData={setSaveData}
          />
      <br />
      <img src="./img/app-banner1"/>
      <NavBar loggedIn={loggedIn}/>
      <Routes>           
      <Route path='/sign-up' element={<CreateUser/>}/>
      <Route exact path='/nba-teams' element={<NbaTeamsContainer />} />
      <Route path ='nba-teams/:id' element={<NbaTeam/>}/>
      <Route path='/players/:id' element={<Player/>}/>
      <Route path='/my-team' element={<MyTeam />} />
      <Route path='/community' element={<CommunityTeamsContainer />} />
       <Route path='/box-scores' element={<RecentGamesContainer />} /> 
        <Route exact path='/players' component={Player}/>
        <Route path='/players/:id' component={Player}/>
      </Routes>
      <Search />
      </div>
  );
}

export default App;
