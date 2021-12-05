import { selectMyTeams, fetchMyTeams } from './redux/myTeamSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'


  function MyTeamDetail(){
    const team = useSelector(selectMyTeams)
    const myTeam = team[0][0].players
    const dispatch = useDispatch()

    const handleClick = (e) => {
      const id = parseInt(e.target.id)
      const myTeamPlayers = team[0][0].user_team_players
      const waivedPlayer = myTeamPlayers.find(player => player.player_id === id);
      dispatch(selectMyTeams) 
      fetch(`http://localhost:3000/user_team_players/${waivedPlayer.id}`, { 
        method: 'DELETE',
        body: JSON.stringify({
          user_team_id: 1,
          player_id: id,
          id: waivedPlayer[0]?.id
        }),
      })
      .then(r=>r.json())
      .then(dispatch(selectMyTeams),
      window.location.reload(true)
      )
    }


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
            <Link to=
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
              <th><button id={player?.id} onClick={handleClick}>waive</button></th>
          </tr>
            ))
          }
          </table>
          
      </>
    )
} 

  export default MyTeamDetail