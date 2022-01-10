import { selectAllTeams, fetchTeams } from './redux/teamSlice'
import { selectMyTeams, addPlayer } from './redux/myTeamSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'


function NbaTeam(){
  const dispatch = useDispatch()

  
  const teams = useSelector(selectAllTeams) 
  const pgNum = useParams()
  const id = parseInt(pgNum.id)
  const myTeam = teams[0]?.find(team=>team.id === id)

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

    let navigate = useNavigate()

    return(
        <div className="team">
              <div className="back-button-div">
                  <button className="back-button" 
                          onClick={()=>navigate(-1)}>
                            back
                  </button>
              </div>
          <h3>{myTeam?.full_name}</h3>
         <Table striped bordered hover 
         className="table" size="sm"
        
         >
           <thead>
          <tr>
          <th><strong>Name</strong></th>
              <th><strong>AGE</strong></th>
              <th><strong>POS</strong></th>
              <th><strong>GP</strong></th>
              <th><strong>GS</strong></th>
              <th><strong>PPG</strong></th>
              <th><strong>FG%</strong></th>
              <th><strong>3P%</strong></th>
              <th><strong>FT%</strong></th>
              <th><strong>MPG</strong></th>
              <th><strong>RPG</strong></th>
              <th><strong>APG</strong></th>
              <th><strong>SPG</strong></th>
              <th><strong>BPG</strong></th>
              <th><strong>TOV</strong></th>
              <th></th>
          </tr>
          </thead>
          <tbody>
          {
            myTeam?.players.map((player)=>(
          <tr key={player.id}>
              <td>
                <Link 
                    className="player-link"
                    to=
                  {{pathname: `/players/${player.id}`}} 
                   
                   >
                    <strong>
                      {player?.name}
                    </strong>
                </Link>
                </td>
              <td>{player?.age}</td>
              <td>{player?.pos}</td>
              <td>{player?.g}</td>
              <td>{player?.gs}</td>
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
              <button
                      name={player.name}
                      className="player-add-button"
                      id={player.id} 
                      label={player}
                      onClick={handleClick}>
                        add
              </button>
          </tr>
            ))
          }
          </tbody>
          </Table>
        </div>
      
    )
}


export default NbaTeam