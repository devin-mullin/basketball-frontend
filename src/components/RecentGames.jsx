import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { Link } from 'react-router-dom'


function RecentGames({ games }){

// stats selectors
const players = useSelector(selectPlayers)
const ppgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer1 = players[0]?.find(player=> player.name === ppgPlayer1)
const ppgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer2 = players[0]?.find(player=> player.name === ppgPlayer2)



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
            
        </div>
    </container>
    )
}

export default RecentGames