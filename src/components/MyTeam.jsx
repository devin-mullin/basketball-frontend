import { useSelector } from "react-redux"
import { myTeamAdd, myTeamRemove, selectMyTeams } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"

function MyTeam(){
   
   const myTeams = useSelector(selectMyTeams)
    
    return(
        <div>
            <h2>My Teams</h2>
            {myTeams[0]?.map(team=> <ul key={team.id}>
                Rosters
             <MyTeamDetail teamRoster={team}/>
             </ul>)}
        </div>
    )
}

export default MyTeam