import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { myTeamAdd, fetchMyTeams, selectMyTeams } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"

function MyTeam(){
    const [playerRefresh, setPlayerRefresh] = useState(true)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchMyTeams())
    }, [playerRefresh])
   
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