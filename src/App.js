import { useEffect, useState } from "react"
import './App.css';
import NbaTeamsContainer from './components/NbaTeamsContainer'
import MyTeam from './components/MyTeam'
import Login from './components/Login'
import CommunityTeamsContainer from './components/CommunityTeamsContainer'
import RecentGamesContainer from './components/RecentGamesContainer'
import NavBar from "./components/NavBar";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'

function App() {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [saveData, setSaveData] = useState({})

  const dispatch = useDispatch()
    
  useEffect(()=>{
      dispatch(fetchTeams())
      dispatch(fetchPlayers())
  }, [])



  return (

      <div className="App">
      <NavBar />
      <Routes>          
      <Route path='/login' 
          element={<Login setUser={setUser} 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn}
          saveData={saveData} 
          setSaveData={setSaveData}
          />} />
      <Route path='/nba-teams' element={<NbaTeamsContainer />} />
      <Route path='/my-team' element={<MyTeam />} />
      <Route path='/community' element={<CommunityTeamsContainer />} />
       <Route path='/box-scores' element={<RecentGamesContainer />} /> 
      </Routes>
      </div>
  );
}

export default App;
