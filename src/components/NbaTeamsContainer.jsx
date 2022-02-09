import { useSelector } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)
    const teamsSlice = teams[0]?.slice(0, 30)
    const navigate = useNavigate()

    return(
        <>
        <Container className="teams-container">
        {teamsSlice?.map(team=> 
        <row 
        md={1}
        className="justify-content-md-center"
        key={team.id}>
            <button className="team-button"
                    onClick={()=> navigate(`/nba-teams/${team.id}`)}
            >
            <p className="team-link">
               <strong>
                {team.full_name}
                </strong>
            </p>
            </button>
            </row>)}
        </Container>
        </>
    )
}


export default NbaTeamsContainer