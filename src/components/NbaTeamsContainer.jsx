import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)


    return(
        <>
        <Container className="teams-container">
        {teams[0]?.map(team=> 
        <row 
        md={4}
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