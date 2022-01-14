import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { Link, useNavigate } from 'react-router-dom'


function RecentGames({ games }){

let navigate = useNavigate()

// GAME 1 stats selectors
const players = useSelector(selectPlayers)
//game1

//ppg
const ppg = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.shortDisplayName
const ppgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer1 = players[0]?.find(player=> player.name === ppgPlayer1)
const thisPlayer1pic = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.headshot
const ppgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPlayer2 = players[0]?.find(player=> player.name === ppgPlayer2)
const thisPlayer2pic = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.headshot
// rpg
const rpg = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.shortDisplayName
const rpgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpgPlayer1 = players[0]?.find(player=> player.name === rpgPlayer1)
const rpgPlayer1pic = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.headshot
const rpgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpgPlayer2 = players[0]?.find(player=> player.name === rpgPlayer2)
const rpgPlayer2pic = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.headshot
//apg
const apg = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[2]?.shortDisplayName
const apgPlayer1 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.athlete?.displayName
const findApgPlayer1 = players[0]?.find(player=> player.name === apgPlayer1)
const apgPlayer1pic = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.athlete?.headshot
const apgPlayer1Stat = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.displayValue
const apgPlayer2 = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.athlete?.displayName
const findApgPlayer2 = players[0]?.find(player=> player.name === apgPlayer2)
const apgPlayer2pic = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.athlete?.headshot
const apgPlayer2Stat = games?.events[0]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.displayValue

// GAME 2 selector stats
//ppg
const ppg2 = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[0]?.shortDisplayName
const ppg2Player1 = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPpg2Player1 = players[0]?.find(player=> player.name === ppg2Player1)
const thisPpg2Player1Pic = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.headshot
const ppg2Player2 = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.displayName
const thisPpg2Player2 = players[0]?.find(player=> player.name === ppg2Player2)
const thisPpg2Player2pic = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.headshot
// rpg
const rpg2 = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[1]?.shortDisplayName
const rpg2Player1 = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpg2Player1 = players[0]?.find(player=> player.name === rpg2Player1)
const rpg2Player1pic = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.athlete?.headshot
const rpg2Player2 = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.displayName
const findRpg2Player2 = players[0]?.find(player=> player.name === rpg2Player2)
const rpg2Player2pic = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.athlete?.headshot
//apg
const apg2 = games?.events[0]?.competitions[0]?.competitors[0]?.leaders[2]?.shortDisplayName
const apg2Player1 = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.athlete?.displayName
const findApg2Player1 = players[0]?.find(player=> player.name === apg2Player1)
const apg2Player1pic = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.athlete?.headshot
const apg2Player1Stat = games?.events[1]?.competitions[0]?.competitors[0]?.leaders[2]?.leaders[0]?.displayValue
const apg2Player2 = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.athlete?.displayName
const findApg2Player2 = players[0]?.find(player=> player.name === apg2Player2)
const apg2Player2pic = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.athlete?.headshot
const apg2Player2Stat = games?.events[1]?.competitions[0]?.competitors[1]?.leaders[2]?.leaders[0]?.displayValue
    return(
<container>
    <div className="boxscore-outline">
        <p><strong>{games?.day?.date}</strong></p>
            <h4>
            {games?.events[0]?.name}
            </h4>
            <br/>
        <p><strong>statistical leaders</strong></p>
        <div className="boxscore-layout">
        <strong>
                {ppg}
            </strong>
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
                onClick={()=> navigate(`/players/${thisPlayer2?.id}`)} 
                style={{cursor: 'pointer'}}
                />
                <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${thisPlayer2?.id}`}} 
                   
                   >
                    <strong>
                        {ppgPlayer2}
                    </strong>
            </Link>
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.displayValue} 
    </div>
    <div className="boxscore-layout">
            
        <strong>
            {games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.shortDisplayName}
        </strong>
                <br/>
                <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
        
                <br/>
            <img 
                className="player-boxscore-pic" 
                src={rpgPlayer1pic}
                onClick={()=> navigate(`/players/${findRpgPlayer1?.id}`)} 
                style={{cursor: 'pointer'}}
                />
            <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${findRpgPlayer1?.id}`}} 
                   
                   >
                    <strong>
                        {rpgPlayer1}
                    </strong>
            </Link>
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.displayValue} 
            <br/>
            <br/>
    {games?.events[0]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}
        
        <br/>
    <img 
        className="player-boxscore-pic" 
        src={rpgPlayer2pic}
        onClick={()=> navigate(`/players/${findRpgPlayer2?.id}`)} 
        style={{cursor: 'pointer'}}
        />
    <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${findRpgPlayer2?.id}`}} 
           
           >
            <strong>
                {rpgPlayer2}
            </strong>
    </Link>
    <span> | </span>{games?.events[0]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.displayValue} 
    </div>
    
    <div className="boxscore-layout">
    <strong>
        {apg}
        </strong>
                <br/>
                <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
        
                <br/>
            <img 
                className="player-boxscore-pic" 
                src={apgPlayer1pic}
                onClick={()=> navigate(`/players/${findApgPlayer1?.id}`)} 
                style={{cursor: 'pointer'}}
                />
            <br/>
            <Link 
                    className="player-boxscore-link"
                    to=
                  {{pathname: `/players/${findApgPlayer1?.id}`}} 
                   
                   >
                    <strong>
                        {apgPlayer1}
                    </strong>
            </Link>
            <span> | </span>{apgPlayer1Stat} 
            <br/>
            <br/>
    {games?.events[0]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}
        
        <br/>
    <img 
        className="player-boxscore-pic" 
        src={apgPlayer2pic}
        onClick={()=> navigate(`/players/${findApgPlayer2?.id}`)} 
        style={{cursor: 'pointer'}}
        />
    <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${findApgPlayer2?.id}`}} 
           
           >
            <strong>
                {apgPlayer2}
            </strong>
    </Link>
    <span> | </span>{apgPlayer2Stat} 
    </div>
    <br/>
    <br/>
       
    </div>

<div className="boxscore-outline">
<p><strong>{games?.day?.date}</strong></p>
    <h4>
    {games?.events[1]?.name}
    </h4>
    <br/>
<p><strong>statistical leaders</strong></p>
<div className="boxscore-layout">
<strong>
        {games?.events[1]?.competitions[0]?.competitors[0]?.leaders[0]?.shortDisplayName}
    </strong>
    <br/>
    <br/>
        {games?.events[1]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
    <br/>
    <img 
        className="player-boxscore-pic" 
        src={thisPpg2Player1Pic}
        onClick={()=> navigate(`/players/${thisPpg2Player1?.id}`)} 
        style={{cursor: 'pointer'}}
        />
    <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${thisPpg2Player1?.id}`}} 
           
           >
            <strong>
                {ppg2Player1}
            </strong>
    </Link>
    <span> | </span>{games?.events[1]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.displayValue} 
    <br/>
    <br/>
    {games?.events[1]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}
        <br/>
    <img 
        className="player-boxscore-pic" 
        src={thisPpg2Player2pic}
        onClick={()=> navigate(`/players/${thisPpg2Player2?.id}`)} 
        style={{cursor: 'pointer'}}
        />
        <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${thisPpg2Player2?.id}`}} 
           
           >
            <strong>
                {ppg2Player2}
            </strong>
    </Link>
    <span> | </span>{games?.events[1]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.displayValue} 
</div>
<div className="boxscore-layout">
    
<strong>
    {games?.events[1]?.competitions[0]?.competitors[0]?.leaders[1]?.shortDisplayName}
</strong>
        <br/>
        <br/>
    {games?.events[1]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}

        <br/>
    <img 
        className="player-boxscore-pic" 
        src={rpg2Player1pic}
        onClick={()=> navigate(`/players/${findRpg2Player1?.id}`)} 
        style={{cursor: 'pointer'}}
        />
    <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${findRpg2Player1?.id}`}} 
           
           >
            <strong>
                {rpg2Player1}
            </strong>
    </Link>
    <span> | </span>{games?.events[1]?.competitions[0]?.competitors[0]?.leaders[1]?.leaders[0]?.displayValue} 
    <br/>
    <br/>
{games?.events[1]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}

<br/>
<img 
className="player-boxscore-pic" 
src={rpg2Player2pic}
onClick={()=> navigate(`/players/${findRpg2Player2?.id}`)} 
style={{cursor: 'pointer'}}
/>
<br/>
<Link 
    className="player-boxscore-link"
    to=
  {{pathname: `/players/${findRpg2Player2?.id}`}} 
   
   >
    <strong>
        {rpg2Player2}
    </strong>
</Link>
<span> | </span>{games?.events[1]?.competitions[0]?.competitors[1]?.leaders[1]?.leaders[0]?.displayValue} 
</div>

<div className="boxscore-layout">
<strong>
{apg}
</strong>
        <br/>
        <br/>
    {games?.events[1]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}

        <br/>
    <img 
        className="player-boxscore-pic" 
        src={apg2Player1pic}
        onClick={()=> navigate(`/players/${findApg2Player1?.id}`)} 
        style={{cursor: 'pointer'}}
        />
    <br/>
    <Link 
            className="player-boxscore-link"
            to=
          {{pathname: `/players/${findApg2Player1?.id}`}} 
           
           >
            <strong>
                {apg2Player1}
            </strong>
    </Link>
    <span> | </span>{apg2Player1Stat} 
    <br/>
    <br/>
{games?.events[1]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}

<br/>
<img 
className="player-boxscore-pic" 
src={apg2Player2pic}
onClick={()=> navigate(`/players/${findApg2Player2?.id}`)} 
style={{cursor: 'pointer'}}
/>
<br/>
<Link 
    className="player-boxscore-link"
    to=
  {{pathname: `/players/${findApg2Player2?.id}`}} 
   
   >
    <strong>
        {apg2Player2}
    </strong>
</Link>
<span> | </span>{apg2Player2Stat} 
</div>
<br/>
<br/>

</div>
</container>
    )
}

export default RecentGames