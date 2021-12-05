import { Link, Outlet } from 'react-router-dom'
import Search from './Search'
import { useDispatch } from 'react-redux'


function NavBar( { loggedIn } ){



    return(
        <div>
          <Link to='/my-team'>My Teams</Link>
          <Link to='/nba-teams'>NBA Teams</Link>
          <Link to='/community'>Community Teams</Link>
          <Link to='/box-scores'>Recent Box Scores</Link>
          {loggedIn ? null : <Link to='sign-up'>Sign up</Link>}
        </div>
        
    )
}

export default NavBar