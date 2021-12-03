import { selectAllTeams, selectTeamById } from './redux/teamSlice'
import { useSelector } from 'react-redux'
import { useMemo, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function NbaTeam(){
  const pgNum = useParams()
  const id = parseInt(pgNum.id)
  const teams = useSelector(selectAllTeams)   
  const myTeam = teams.teams.filter(team=>team.id === id)
       
    return(
        <div>
          <h3>{myTeam[0].full_name}</h3>
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
            myTeam[0].players.map((player)=>(
          <tr key={player.id}>
              <td>
                <Link to=
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
              <button>add</button>
          </tr>
            ))
          }
          </table>
        </div>
      
    )
}


export default NbaTeam