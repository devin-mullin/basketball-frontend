import { selectTeamById } from './redux/teamSlice'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { useMemo, useState } from 'react'




function Table({ columns, data }) {
  const [playerRefresh, setPlayerRefresh] = useState(true)

  const [newPlayer, setNewPlayer] = useState({
    user_team_id: 1,
    player_id: ""
  })

  const getCellValue = (cell) => {
    setNewPlayer({ 
      user_team_id: 1,
      player_id: cell.value })
    console.log(cell.value);
    addPlayer(newPlayer)
  }
  
  const addPlayer = (newPlayer) =>{
    fetch('http://localhost:3000/user_team_players', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
  })

  const handleClick = () => {
    
  }
  
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td onClick={()=>getCellValue(cell)} {...cell.getCellProps()}>
                    {cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

function NbaTeam( {thisTeam, setPlayerRefresh } ){

    const columns = useMemo(
        () => [
          {
            Header: 'Players',
            columns: [
                {
                    Header: '',
                    accessor: "id",
                    Cell:
                        <button>
                          add to roster
                        </button>
                    
                },
                {
                    Header: 'Name',
                    accessor: 'name'
                }
            ]
          },
          {
            Header: 'Stats',
            columns: [
                {
                    Header: 'AGE',
                    accessor: 'age',
                },
                {
                    Header: 'POS',
                    accessor: 'pos',
                  },
              {
                Header: 'PPG',
                accessor: 'pts',
              },
              {
                Header: 'FG%',
                accessor: 'fgp',
              },
              {
                Header: '3P%',
                accessor: 'thpp',
              },
              {
                Header: 'FT%',
                accessor: 'ftp',
              },
              {
                Header: 'MPG',
                accessor: 'mp',
              },
              {
                Header: 'RPG',
                accessor: 'trb',
              },
              {
                Header: 'APG',
                accessor: 'ast',
              },
              {
                Header: 'SPG',
                accessor: 'stl',
              },
              {
                Header: 'BPG',
                accessor: 'blk',
              },
            ],
          },
        ],
        []
      )


    const team = useSelector(selectTeamById)
    const players = thisTeam.players.map(player => player)
    const data = players
  

    return(
        <Table columns={columns} data={data} />
    )
}

export default NbaTeam