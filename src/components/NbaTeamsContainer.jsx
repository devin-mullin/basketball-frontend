import NbaTeam from './NbaTeam'
import { useSelector } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { useEffect } from 'react'

function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)

    

    return(
        <>
        <h3>nba teams go here</h3>
        {teams[0]?.map(team=> <ul key={team.id}>
            {team.full_name}

            <NbaTeam thisTeam={team} />
            </ul>)}
        </>
    )
}

export default NbaTeamsContainer