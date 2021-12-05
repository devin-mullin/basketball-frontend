import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)


    return(
        <>
        <h3>NBA Teams</h3>
        {teams[0].map(team=> <ul key={team.id}>
            <Link to={{pathname: `/nba-teams/${team.id}`}}         
           >
                {team.full_name}
            </Link>
            </ul>)}
        </>
    )
}


export default NbaTeamsContainer