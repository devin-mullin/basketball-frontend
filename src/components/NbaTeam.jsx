import { selectAllTeams, selectTeamById } from './redux/teamSlice'
import { useSelector } from 'react-redux'
import { useMemo, useState, useEffect } from 'react'
import Table from 'rc-table'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function NbaTeam(){
  const pgNum = useParams()
  const id = parseInt(pgNum.id)
  const teams = useSelector(selectAllTeams)   
  const myTeam = teams.teams.filter(team=>team.id === id)


   const players = myTeam[0].players.map(player=>player)
   const columns = [
     { title: ""}
  
  ]

    
    return(
        <div>
          <h3>{myTeam[0].full_name}</h3>
          <Table id="table"
            rowKey={id}
            columns={columns}
            data={players}
          />
        </div>
      
    )
}


export default NbaTeam