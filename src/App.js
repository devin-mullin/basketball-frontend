import { useEffect, useState } from "react"
import './App.css';
import NbaTeamsContainer from './components/NbaTeamsContainer'
import MyTeam from './components/MyTeam'
import CommunityTeamsContainer from './components/CommunityTeamsContainer'
import RecentGamesContainer from './components/RecentGamesContainer'


function App() {
//   const [teams, setTeams] = useState([])

//   useEffect(()=> {
//     fetch('http://localhost:3000/teams')
//     .then(res => res.json())
//     .then(data => setTeams(data))
// }, [])

  return (

      <div className="App">
        <NbaTeamsContainer/>
        <MyTeam />
        <CommunityTeamsContainer />
        <RecentGamesContainer /> 
      </div>
  );
}

export default App;
