import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { selectMyTeams, selectTeamById } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"

function MyTeam({ user }){ 

   const myTeams = useSelector(selectMyTeams)
    
    return(
        <div>
            <h2 align="center">My Teams</h2>
            {myTeams[0]?.map(team=> <ul key={team.id}>
               
             <MyTeamDetail user={user}/>
             </ul>)}
        </div>
    )
}

export default MyTeam