import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPlayers, fetchPlayers } from './redux/playerSlice'
import { selectMyTeams } from './redux/myTeamSlice'
import { useEffect } from 'react'

function Player(){
    let dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchPlayers())  
      }, [])


    const pgNum = useParams()
    const id = parseInt(pgNum.id)
    const players = useSelector(selectPlayers)   
    const thisPlayer = players[0].find(player=> player.id === id)
    
 
    const handleClick = (e) =>{
        dispatch(selectMyTeams)
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
            .then((data)=> console.log(data))
            .catch((error) => {
            console.error('Error:', error);
            });
                }

    return(
        <>
        <div>
            <h3>
                {thisPlayer?.name}
            </h3>
            <h4>
                {thisPlayer?.tm}
            </h4>
        </div>
        <table>
            <tr>
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
            </tr>
            <tr>
                <td>{thisPlayer?.age}</td>
                <td>{thisPlayer?.pos}</td>
                <td>{thisPlayer?.pts}</td>
                <td>{thisPlayer?.fgp}</td>
                <td>{thisPlayer?.thpp}</td>
                <td>{thisPlayer?.ftp}</td>
                <td>{thisPlayer?.mp}</td>
                <td>{thisPlayer?.trb}</td>
                <td>{thisPlayer?.ast}</td>
                <td>{thisPlayer?.stl}</td>
                <td>{thisPlayer?.blk}</td>
                <td>{thisPlayer?.tov}</td>
                <button id={thisPlayer?.id} onClick={handleClick}>add</button>
            </tr>
            </table>
            
        </>
    )
}

export default Player