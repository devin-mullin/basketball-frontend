import { useMemo } from 'react'
import Table from 'react-table'

function PlayerTable(players){
    const data = players.map(yes => yes.newPlayer)
    const player = data.map(data => data.label )
    const columns = useMemo(
        ()=> [
            { 
                Header: "Name",
                accessor: player
            }
        ]
    )

    return(
        <div>
            <Table columns={columns} />
        </div>
    )
}

export default PlayerTable