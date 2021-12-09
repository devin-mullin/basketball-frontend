import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Navbar, Container} from 'react-bootstrap'

function NavBar( { loggedIn } ){



    return(
      <Container>
        <Navbar  
             className="border border-info bg-secondary rounded text-white" sticky="top">
          <Container>
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
          </Container>
        </Navbar>
      </Container>
      
        
    )
}

export default NavBar