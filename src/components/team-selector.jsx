import { render } from "@testing-library/react"
import { useEffect, useState } from "react"
import Select from "react-select"
import PlayerTable from "./player-table"

function TeamSelector(){
    const [teams, setTeams] = useState([])
    const [chosenTeam, setChosenTeam] = useState([])
    const [teamSelected, setTeamSelected] = useState(false)
    const [players, setPlayers] = useState([])
    const [playerSelected, setPlayerSelected] = useState(false)
    

    useEffect(()=> {
        fetch('http://localhost:3000/teams')
        .then(res => res.json())
        .then(data => setTeams(data))
        console.log(teams)
    }, [])

    const handleChange = (e) => {
        let players = e[0].value.map(players => players)
        setTeamSelected(true)
        setChosenTeam({
            ...chosenTeam,
            players
        })
    }

    const handlePlayerSelect = (e) => {
        console.log(e);
        let newPlayer = e
        setPlayers({
            ...players, 
            newPlayer
        })
        setPlayerSelected(true)
    }

    
 
    return (
        <>
        <div>
            <h3>nba TEAMS</h3>
            <Select 
            isMulti
            name="teams"
            options={teams.map(team => ({key: team.id, label: team.abrv, options:[{ value: team.players, label: team.full_name}] }))}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="select ya team"    
            onChange={handleChange}
            />
            {teamSelected ?
            <Select 
            isMulti
            name="players"
            options={chosenTeam.players.map(player => 
            ({key: player.id, label: player.pos, 
            options:[{ value: player, 
            label: player.name, 
            pts: player.pts,
            reb: player.trb,
            ast: player.ast,
            stl: player.stl,
            blk: player.blk }]}))}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="select ya players" 
            onChange={handlePlayerSelect}
            />: null}
        </div>
        </>
    )
    
    }

export default TeamSelector