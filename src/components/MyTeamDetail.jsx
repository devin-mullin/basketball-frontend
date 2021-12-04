import { selectMyTeams } from './redux/myTeamSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'


  function MyTeamDetail(){
    const [playerId, setPlayerId] = useState("")
    const team = useSelector(selectMyTeams)
    const myTeam = team[0][0].players
    const dispatch = useDispatch()

    const handleClick = (e) => {
      const id = parseInt(e.target.id)
      dispatch(selectMyTeams)
      console.log({
        user_team_id: 1,
        player_id: id
      });
      fetch('http://localhost:3000/user_player_del', { 
        method: 'DELETE',
        body: JSON.stringify({
          user_team_id: 1,
          player_id: id
        }),
      })
      .then(r=>r.json())
    }
    console.log(team);

    return(
      <>
      <div>
          <h3>
              
          </h3>
          <h4>
              
          </h4>
      </div>
      <table>
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
          {
            myTeam.map((player)=>(
          <tr key={player.id}>
            <Link to=
              {{pathname: `/players/${player.id}`}}>
                {player?.name}
            </Link>
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
              <th><button id={player.id} onClick={handleClick}>waive</button></th>
          </tr>
            ))
          }
          </table>
          
      </>
    )
} 

  export default MyTeamDetail