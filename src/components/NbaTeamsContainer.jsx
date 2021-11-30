import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeams } from './redux/teamSlice'
import { useEffect } from 'react'

function NbaTeamsContainer(){
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state)=> state.team)

    useEffect(()=>{
        dispatch(fetchTeams())
    }, [])

    if (loading) return <p>Loading...</p>

    return(
        <>
        <h3>nba teams go here</h3>
        {entities?.map((team)=> (
            <p key={team.id}>{team.full_name}</p>
        ))}
        <NbaTeam />
        </>
    )
}

export default NbaTeamsContainer