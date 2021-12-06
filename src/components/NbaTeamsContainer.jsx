import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllTeams } from './redux/teamSlice'
import { Link } from 'react-router-dom'
import { Stack, Button } from 'react-bootstrap'


function NbaTeamsContainer(){

    const teams = useSelector(selectAllTeams)


    return(
        <>
        <div align="center">
        <h3>NBA Teams</h3>
        {teams[0].map(team=> 
        <Stack 
        direction="horizontal"  
        gap={3}
        className="align-items-center justify-content-center"
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
            </Stack>)}
        </div>
        </>
    )
}


export default NbaTeamsContainer