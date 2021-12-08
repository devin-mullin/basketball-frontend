import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'
import { Stack, Button, Container, Row } from 'react-bootstrap'
import '/home/devin/personal/basketball-mega/basketball-frontend/src/App.css'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)


    return(
        <>
        <Container align="center">
        <h3>NBA Teams</h3>
        {teams[0].map(team=> 
        <Row  
        md={4}
        className="justify-content-md-center"
        key={team.id}>
            <Button variant="outline-info"
            className="m-2 2 2 2"
            >
            <Link className="text-black" 
            to={{pathname: `/nba-teams/${team.id}`}}         
           >
                {team.full_name}
            </Link>
            </Button>
            </Row>)}
        </Container>
        </>
    )
}


export default NbaTeamsContainer