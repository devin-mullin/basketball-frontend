import { useEffect, useState } from "react"
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
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'
import { fetchMyTeams } from './components/redux/myTeamSlice'
import { getTeamPlayers } from './components/redux/myTeamPlayerSlice'
import appbanner1 from './components/img/appbanner1.jpeg'


function App() {
  const [user, setUser] = useState({
    id: "",
    username: ""
  })
  const [loggedIn, setLoggedIn] = useState(null)
  const location = useLocation()
  const [games, getGames] = useState({})

  useEffect(()=>{
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard#')
    .then(r=>r.json())
    .then(data=>getGames(data))
}, [])


  if(loggedIn === true){
    console.log(user);
  }


  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(data=> {
        setUser(data)
      })
    }
  },[])
  useEffect(()=>{
      dispatch(fetchTeams())    
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchPlayers())  
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchMyTeams())
  }, [])

  // useEffect(()=>{
  //   dispatch(getTeamPlayers())
  // }, [dispatch])






  return (

      <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <div className="logo">
        <img className="border border-info" 
        src={appbanner1} 
        alt="devy league fantasy basketball version 1.0"
        onClick={()=>navigate('/')}
        />
      </div>
      <Login 
          user={user}
          setUser={setUser} 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn}
          />
      <br />
      <Search />
      <Routes>           
      <Route path='/sign-up' element={<CreateUser/>}/>
      <Route exact path='/nba-teams' element={<NbaTeamsContainer />} />
      <Route path ='nba-teams/:id' element={<NbaTeam/>}/>
      <Route path='/players/:id' element={<Player/>}/>
      <Route path='/my-team' element={<MyTeam user={user} />} />
      <Route path='/community' element={<CommunityTeamsContainer />} />
       <Route path='/box-scores' element={<RecentGamesContainer games={games}/>} /> 
        <Route exact path='/players' component={Player}/>
        <Route path='/players/:id' component={Player}/>
      </Routes>
      <br/>
      </div>
  );
}

export default App;
