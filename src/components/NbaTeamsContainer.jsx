import { useSelector } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)
    const teamsSlice = teams[0]?.slice(0, 30)

    return(
        <>
        <Container className="teams-container">
        {teamsSlice?.map(team=> 
        <row 
        md={1}
        className="justify-content-md-center"
        key={team.id}>
            <button className="team-button"
          
            >
            <Link className="team-link" 
            to={{pathname: `/nba-teams/${team.id}`}}         
           >
               <strong>
                {team.full_name}
                </strong>
            </Link>
            </button>
            </row>)}
        </Container>
        </>
    )
}


export default NbaTeamsContainer