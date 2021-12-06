import { selectMyTeams, selectMyTeamById, fetchMyTeams } from './redux/myTeamSlice'
import { remove } from './redux/myTeamPlayerSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'



  function MyTeamDetail({user}){
    const team = useSelector(selectMyTeams)
    const myTeam = team[0][0].players
    const dispatch = useDispatch()

    // console.log(team[0].find(team=>team.user_id === user.id));
   

    const handleClick = (e) => {
      const id = parseInt(e.target.id)
      const myTeamPlayers = team[0][0].user_team_players
      const waivedPlayer = myTeamPlayers.find(player => player.player_id === id);
      fetch(`http://localhost:3000/user_team_players/${waivedPlayer.id}`, { 
        method: 'DELETE',
        body: JSON.stringify({
          user_team_id: 1,
          player_id: id,
          id: waivedPlayer[0]?.id
        }),
      })
      .then(r=>r.json())
      .then(data=>{
        dispatch(remove(id),
        window.location.reload(true))
      })
    }

    // const add = (accumulator, a) = {
    //   return accumulator + a
    // }

    return(
      <>
      <div>
          <h3>
              
          </h3>
          <h4>
              
          </h4>
      </div>
      <Table striped bordered hover size="sm"
      className="mt-5 5 5 5"
      >
          <tr>
              <th>Name</th>
              <th>TEAM</th>
              <th>AGE</th>
              <th>POS</th>
              <th>PPG</th>
              <th>FG%</th>
              <th>3P%</th>
              <th>FT%</th>
              <th>MPG</th>
              <th>RPG</th>
              <th>APG</th>
              <th>SPG</th>
              <th>BPG</th>
              <th>TOV</th>
              <th></th>
          </tr>
          {
            myTeam.map((player)=>(
          <tr key={player.id}>
            <Link className="border-0 text-primary" to=
              {{pathname: `/players/${player.id}`}}>
                {player?.name}
            </Link>
              <td>{player?.tm}</td>
              <td>{player?.age}</td>
              <td>{player?.pos}</td>
              <td>{player?.pts}</td>
              <td>{player?.fgp}</td>
              <td>{player?.thpp}</td>
              <td>{player?.ftp}</td>
              <td>{player?.mp}</td>
              <td>{player?.trb}</td>
              <td>{player?.ast}</td>
              <td>{player?.stl}</td>
              <td>{player?.blk}</td>
              <td>{player?.tov}</td>
              <Button variant="outline-danger" 
                          id={player?.id} 
                          onClick={handleClick}>
                            waive
              </Button>
                  
          </tr>
            ))
          }
          </Table>
          
      </>
    )
} 

  export default MyTeamDetail