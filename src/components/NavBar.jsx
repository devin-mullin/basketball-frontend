import { Link, Outlet } from 'react-router-dom'
import Search from './Search'
import { useDispatch } from 'react-redux'
import { fetchTeams } from './redux/teamSlice'
import { useEffect } from 'react'

function NavBar(){
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchTeams())    
}, [dispatch])

    return(
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/my-team'>My Teams</Link>
          <Link to='/nba-teams'>NBA Teams</Link>
          <Link to='/community'>Community Teams</Link>
          <Link to='/box-scores'>Recent Box Scores</Link>
        </div>
        
    )
}

export default NavBar