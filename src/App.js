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
import { Routes, Route, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchTeams } from './components/redux/teamSlice'
import { fetchPlayers } from './components/redux/playerSlice'
import { fetchMyTeams } from './components/redux/myTeamSlice'
import { getTeamPlayers } from './components/redux/myTeamPlayerSlice'
import appbanner1 from './components/img/appbanner1.jpeg'


function App() {
  const [user, setUser] = useState('')
  const [loggedIn, setLoggedIn] = useState(null)
  const [ locationKeys, setLocationKeys ] = useState([])



  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
      dispatch(fetchTeams())    
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchPlayers())  
  }, [dispatch])
  
  useEffect(()=>{
    dispatch(fetchMyTeams())
  }, [dispatch])

  // useEffect(()=>{
  //   dispatch(getTeamPlayers())
  // }, [dispatch])

  // useEffect(() => {
  //   return history.listen(location => {
  //     if (history.action === 'PUSH') {
  //       setLocationKeys([ location.key ])
  //     }
  
  //     if (history.action === 'POP') {
  //       if (locationKeys[1] === location.key) {
  //         setLocationKeys(([ _, ...keys ]) => keys)
  
  //       } else {
  //         setLocationKeys((keys) => [ location.key, ...keys ])

  //       }
  //     }
  //   })
  // }, [ locationKeys, ])




  return (

      <div className="bg-light">
      <div align="center">
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
      <NavBar loggedIn={loggedIn}/>
      <Search />
      <Routes>           
      <Route path='/sign-up' element={<CreateUser/>}/>
      <Route exact path='/nba-teams' element={<NbaTeamsContainer />} />
      <Route path ='nba-teams/:id' element={<NbaTeam/>}/>
      <Route path='/players/:id' element={<Player/>}/>
      <Route path='/my-team' element={<MyTeam user={user} />} />
      <Route path='/community' element={<CommunityTeamsContainer />} />
       <Route path='/box-scores' element={<RecentGamesContainer />} /> 
        <Route exact path='/players' component={Player}/>
        <Route path='/players/:id' component={Player}/>
      </Routes>
      <br/>
      </div>
  );
}

export default App;
