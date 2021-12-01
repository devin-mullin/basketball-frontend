import { Link, Outlet } from 'react-router-dom'

function NavBar(){

    return(
        <>
          <Link to='/login'>Login</Link>
          <Link to='/my-team'>My Teams</Link>
          <Link to='/nba-teams'>NBA Teams</Link>
          <Link to='/community'>Community Teams</Link>
          <Link to='/box-scores'>Recent Box Scores</Link>
        </>
    )
}

export default NavBar