import { Link, Outlet } from 'react-router-dom'
import Search from './Search'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'


function NavBar( { loggedIn } ){



    return(
        <div align="center" 
             className="border border-info p-3 bg-secondary text-white m-5 5 5 5">
          {loggedIn ?
            <Button variant="outline-info"> 
              <Link to='/my-team' className="text-white"><strong> My Teams </strong></Link>
            </Button> : null}
          <Button variant="outline-info">
            <Link to='/nba-teams' className="text-white"><strong> NBA Teams </strong></Link>
          </Button>
          <Button variant="outline-info">
            <Link to='/community' className="text-white"><strong> Community Teams </strong></Link>
          </Button>
          <Button variant="outline-info">
            <Link to='/box-scores' className="text-white"><strong> Recent Box Scores </strong></Link>
          </Button>
          {loggedIn ? null : 
            <Button variant="outline-info" className="text-white">
              <Link to='sign-up' className="text-white"><strong> Sign Up </strong></Link>
            </Button>
          }
        </div>
        
    )
}

export default NavBar