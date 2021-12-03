import { useEffect, useState } from "react"
import './App.css';
import NbaTeamsContainer from './components/NbaTeamsContainer'
import NbaTeam from './components/NbaTeam'
import MyTeam from './components/MyTeam'
import Login from './components/Login'
import Player from './components/Player'
import CommunityTeamsContainer from './components/CommunityTeamsContainer'
import RecentGamesContainer from './components/RecentGamesContainer'
import NavBar from "./components/NavBar";
import Search from "./components/Search"
import { Routes, Route, Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, selectTeamById, selectAllTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'
import { fetchMyTeams } from './components/redux/myTeamSlice'
import "tailwindcss/tailwind.css"

function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [saveData, setSaveData] = useState({})

  const dispatch = useDispatch()
  let teams = useSelector(selectAllTeams)


  useEffect(()=>{
      dispatch(fetchTeams())    
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchPlayers())  
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchMyTeams())
  }, [dispatch])

 

  return (

      <div className="App">
      <NavBar />
      <Search />
      <Routes>          
      <Route path='/login' 
          element={<Login setUser={setUser} 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn}
          saveData={saveData} 
          setSaveData={setSaveData}
          />} />
      <Route exact path='/nba-teams' element={<NbaTeamsContainer />} />
      <Route path ='nba-teams/:id' element={<NbaTeam/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='/my-team' element={<MyTeam />} />
      <Route path='/community' element={<CommunityTeamsContainer />} />
       <Route path='/box-scores' element={<RecentGamesContainer />} /> 
        <Route exact path='/players' component={Player}/>
        <Route path='/players/:id' component={Player}/>
      </Routes>
      </div>
  );
}

export default App;
