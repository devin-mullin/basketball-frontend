import NbaTeam from './NbaTeam'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeams } from './redux/teamSlice'
import { useEffect } from 'react'
import { selectAllTeams } from './redux/teamSlice'

function NbaTeamsContainer(){
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(fetchTeams())
    }, [])

    const teams = useSelector(selectAllTeams)

    return(
        <>
        <h3>nba teams go here</h3>
        {teams[0]?.map(team=>team.full_name)}
        <NbaTeam />
        </>
    )
}

export default NbaTeamsContainer