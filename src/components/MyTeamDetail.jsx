import { selectTeamById } from './redux/teamSlice'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { useMemo, useState } from 'react'

function Table({ columns, data }) {
  const [delPlayer, setDelPlayer] = useState({
    user_team_id: 1,
    id: ""
  })  
  const getCellValue = (cell) => {
    setDelPlayer({ 
      user_team_id: 1,
      id: cell.value })
      console.log(cell.row.id);
    waivePlayer(delPlayer);
    
  }

  const waivePlayer = (delPlayer) =>{
    fetch(`http://localhost:3000/user_team_players/${delPlayer.id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(delPlayer),
    })
    .then(response => response.json())
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
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td onClick={()=>getCellValue(cell)} 
                  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  function MyTeamDetail( { teamRoster }){
    const columns = useMemo(
        () => [
          {
            Header: 'Players',
            columns: [
                {
                    Header: '',
                    accessor: 'id',
                    Cell: ({ cell }) => (
                        <button>remove from roster</button>
                    )
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
    const players = teamRoster.players.map(player => player)
    const data = useMemo(()=> players)
  

    return(
        <Table columns={columns} data={data} />
    )
} 

  export default MyTeamDetail