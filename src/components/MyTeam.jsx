import { useSelector } from "react-redux"
import { myTeamAdd, myTeamRemove, selectMyTeams } from './redux/myTeamSlice'
import { useEffect } from "react"


function MyTeam(){
   
   const myTeams = useSelector(selectMyTeams)

    return(
        <div>
            <h2>My Teams</h2>
            {myTeams[0]?.map((team) => (
                <p key={team.id}>{team.user_id}</p>
            ))}
        </div>
    )
}

export default MyTeam