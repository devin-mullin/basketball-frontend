import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPlayers } from './redux/playerSlice'
import { add } from './redux/myTeamPlayerSlice'
import config from './config'
import { Table, Button, Card } from 'react-bootstrap'


function Player(){
   
    let dispatch = useDispatch()
    
    const pgNum = useParams()
    const id = parseInt(pgNum.id)
    const players = useSelector(selectPlayers)   
    const thisPlayer = players[0].find(player=> player.id === id)
    
 
    const handleClick = (e) =>{
        alert(`${e.target.name} added to your team!`)
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
            .then(dispatch(add({
                player_id: id,
                user_team_id: 1
            })))
            .catch((error) => {
            console.error('Error:', error);
            });
                }


    // video

    const searchTerms = `${thisPlayer?.name} + NBA 2021 highlights` 
    const API_KEY = config.API_KEY
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerms}&key=${API_KEY}`;
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
    document.querySelector(".youtube").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`
        })      


    return(
        <>
        <Card className="bg-secondary justify-content-md-center border border-info rounded m-5 5 5 5 text-white" 
           >
            <Card className="flex bg-secondary border border-info rounded m-5-5-5-5">
            <h4 align="center" >
                {thisPlayer?.name}
            </h4>
            <p align="center">
            <strong>{thisPlayer?.pos}, {thisPlayer?.tm}</strong>
            </p> 
            </Card>       
        <Table striped bordered hover size="sm"
        className="flex bg-light"
    
        >
            <thead>
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
            </thead>
            <tbody>
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
                <Button variant="outline-success" className="text-success" 
                    id={thisPlayer?.id} 
                    onClick={handleClick}
                    name={thisPlayer?.name}
                    >
                    add
                </Button>
            </tr>
            </tbody>
            </Table>
            <div align="center">
            <p>Highlights:</p>
            <iframe title="Player Highlights" width="50%" height="500px" class="youtube"/>
        </div>
            </Card>
        </>
    )
}

export default Player