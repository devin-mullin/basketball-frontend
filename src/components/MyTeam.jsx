import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { selectMyTeams } from './redux/myTeamSlice'
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