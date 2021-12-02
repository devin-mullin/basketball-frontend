import { Link, Outlet } from 'react-router-dom'
import Search from './Search'

function NavBar(){

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