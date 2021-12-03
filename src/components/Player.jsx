import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPlayers } from './redux/playerSlice'
import { selectMyTeams } from './redux/myTeamSlice'

function Player(){
    
    const pgNum = useParams()
    const id = parseInt(pgNum.id)
    const players = useSelector(selectPlayers)   
    const thisPlayer = players[0].filter(player=> player.id === id)
    
    let dispatch = useDispatch()
    
    const handleClick = () =>{
        dispatch(selectMyTeams)
        fetch('http://localhost:3000/user_team_players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_team_id: 1,
                player_id: id
            }),
        })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
                }

    return(
        <>
        <div>
            <h3>
                {thisPlayer[0]?.name}
            </h3>
            <h4>
                {thisPlayer[0]?.tm}
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
                <td>{thisPlayer[0]?.age}</td>
                <td>{thisPlayer[0]?.pos}</td>
                <td>{thisPlayer[0]?.pts}</td>
                <td>{thisPlayer[0]?.fgp}</td>
                <td>{thisPlayer[0]?.thpp}</td>
                <td>{thisPlayer[0]?.ftp}</td>
                <td>{thisPlayer[0]?.mp}</td>
                <td>{thisPlayer[0]?.trb}</td>
                <td>{thisPlayer[0]?.ast}</td>
                <td>{thisPlayer[0]?.stl}</td>
                <td>{thisPlayer[0]?.blk}</td>
                <td>{thisPlayer[0]?.tov}</td>
            </tr>
            </table>
            <button onClick={handleClick}>add player to team</button>
        </>
    )
}

export default Player