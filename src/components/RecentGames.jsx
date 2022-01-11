import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { Link, useNavigate } from 'react-router-dom'


function RecentGames({ games }){

let navigate = useNavigate()

// stats selectors
const players = useSelector(selectPlayers)
//ppg
const ppgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer1 = players[0]?.find(player=> player.name === ppgPlayer1)
const thisPlayer1pic = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.headshot
const ppgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer2 = players[0]?.find(player=> player.name === ppgPlayer2)
const thisPlayer2pic = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.headshot
// rpg
const rpgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpgPlayer1 = players[0]?.find(player=> player.name === rpgPlayer1)
const rpgPlayer1pic = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.headshot
const rpgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpgPlayer2 = players[0]?.find(player=> player.name === rpgPlayer2)
console.log(rpgPlayer2);
const rpgPlayer2pic = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.headshot



    return(
    <container>
        <div className="team">
        <p><strong>{games?.day?.date}</strong></p>
            <h4>
            {games?.events[0]?.name}
            </h4>
            <br/>
            <p><strong>statistical leaders</strong></p>
            {games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.shortDisplayName}
            <br/>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
            <br/>
            <img 
                className="player-boxscore-pic" 
                src={thisPlayer1pic}
                onClick={()=> navigate(`/players/${thisPlayer1.id}`)} 
                style={{cursor: 'pointer'}}
                />
            <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${thisPlayer1.id}`}} 
                   
                   >
                    <strong>
                        {ppgPlayer1}
                    </strong>
            </Link>
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.displayValue} 
            <br/>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}
            <br/>
            <img 
                className="player-boxscore-pic" 
                src={thisPlayer2pic}
                onClick={()=> navigate(`/players/${thisPlayer2.id}`)} 
                style={{cursor: 'pointer'}}
                />
            <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${thisPlayer2.id}`}} 
                   
                   >
                    <strong>
                        {ppgPlayer2}
                    </strong>
            </Link>
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.displayValue} 
            <br/>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.shortDisplayName}
            <br/>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
            <br/>
            <img 
                className="player-boxscore-pic" 
                src={rpgPlayer1pic}
                onClick={()=> navigate(`/players/${findRpgPlayer1.id}`)} 
                style={{cursor: 'pointer'}}
                />
            <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${findRpgPlayer1.id}`}} 
                   
                   >
                    <strong>
                        {rpgPlayer1}
                    </strong>
            </Link>
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.displayValue} 
            <br/>
            <br/>
       
        </div>
    </container>
    )
}

export default RecentGames