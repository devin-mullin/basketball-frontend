import { useState, useEffect } from 'react'


function RecentGames({ games }){




    return(
    <container>
        <div>
        <p><strong>{games?.day?.date}</strong></p>
        </div>
        <div>
            <h4>
            {games?.events[0]?.name}
            </h4>
            <br/>
            <p><strong>statistical leaders</strong></p>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.team?.shortDisplayName}
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.shortDisplayName}
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.athlete?.displayName}
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[0]?.leaders[0]?.leaders[0]?.displayValue} 
            <br/>
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[1]?.team?.shortDisplayName}
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.shortDisplayName}
            <br/>
            {games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.athlete?.displayName}
            <span> | </span>{games?.events[0]?.competitions[0]?.competitors[1]?.leaders[0]?.leaders[0]?.displayValue} 
            
        </div>
    </container>
    )
}

export default RecentGames