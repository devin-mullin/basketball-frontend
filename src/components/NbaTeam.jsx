import { selectAllTeams, fetchTeams } from './redux/teamSlice'
import { selectMyTeams, addPlayer } from './redux/myTeamSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'


function NbaTeam(){
  const dispatch = useDispatch()

  
  const teams = useSelector(selectAllTeams) 
  const pgNum = useParams()
  const id = parseInt(pgNum.id)
  const myTeam = teams[0].find(team=>team.id === id)

  const handleClick = (e) =>{
    alert(`${e.target.name} added to your team!`)
    const player = myTeam.players.filter(player=>player.id == e.target.id)
    console.log(player);
    fetch('http://localhost:3000/user_team_players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_team_id: 1,
            player_id: e.target.id
        }),
    })
        .then(response => response.json())
        .then(()=>dispatch(addPlayer(player)))
        .catch((error) => {
        console.error('Error:', error);
        });
            }

    return(
        <div>
          <h3 align="center">{myTeam?.full_name}</h3>
         <Table striped bordered hover size="sm"
         className="m-5 5 5 5 bg-light"
         >
           <thead>
          <tr>
              <th>Name</th>
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
          </thead>
          <tbody>
          {
            myTeam?.players.map((player)=>(
          <tr key={player.id}>
              <td>
                <Link 
                    className="text-dark"
                    to=
                  {{pathname: `/players/${player.id}`}} 
                   
                   >
                      {player?.name}
                </Link>
                </td>
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
              <Button variant="outline-success" 
                      name={player.name}
                      id={player.id} 
                      label={player}
                      onClick={handleClick}>
                        add
              </Button>
          </tr>
            ))
          }
          </tbody>
          </Table>
        </div>
      
    )
}


export default NbaTeam