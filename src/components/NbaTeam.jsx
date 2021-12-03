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
     { title: "", dataIndex: "", fixed: true, cell: <button>click me</button>},
     { title: "Name", dataIndex: "name", fixed: true},
     { title: "Age", dataIndex: "age", fixed: true},
     { title: "POS", dataIndex: "pos", fixed: true},
     { title: "PPG", dataIndex: "pts", fixed: true},
     { title: "FG%", dataIndex: "fgp", fixed: true},
     { title: "3P%", dataIndex: "thpp", fixed: true},
     { title: "FT%", dataIndex: "ftp", fixed: true},
     { title: "MPG", dataIndex: "mp", fixed: true},
     { title: "RPG", dataIndex: "trb", fixed: true},
     { title: "APG", dataIndex: "ast", fixed: true},
     { title: "SPG", dataIndex: "stl", fixed: true},
     { title: "BPG", dataIndex: "blk", fixed: true},

  
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