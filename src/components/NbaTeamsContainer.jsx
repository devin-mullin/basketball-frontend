import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'
import '/home/devin/personal/basketball-mega/basketball-frontend/src/App.css'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)


    return(
        <>
        <h3 className="teams-container">NBA Teams</h3>
        <Container className="teams-container">
        {teams[0]?.map(team=> 
        <row 
        md={4}
        className="justify-content-md-center"
        key={team.id}>
            <button className="team-button"
          
            >
            <Link className="text-dark" 
            to={{pathname: `/nba-teams/${team.id}`}}         
           >
                {team.full_name}
            </Link>
            </button>
            </row>)}
        </Container>
        </>
    )
}


export default NbaTeamsContainer