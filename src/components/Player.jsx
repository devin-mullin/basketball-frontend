import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPlayers } from './redux/playerSlice'
import Table from 'rc-table'

function Player(){
    const pgNum = useParams()
    const id = parseInt(pgNum.id)
    const players = useSelector(selectPlayers)   
    const thisPlayer = players[0].filter(player=> player.id === id)
    console.log(thisPlayer[0]);

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
        <>
        <div>
            <h3>
                {thisPlayer[0]?.name}
            </h3>
            <h4>
                {thisPlayer[0]?.tm}
            </h4>
        </div>
        <Table id="table"
        rowkey={id}
        columns={columns}
        data={thisPlayer[0].map(player=>player)}
        />
        </>
    )
}

export default Player