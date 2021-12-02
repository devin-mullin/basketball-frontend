import { selectTeamById } from './redux/teamSlice'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { useMemo } from 'react'

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
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
  
    // Render the UI for your table
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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