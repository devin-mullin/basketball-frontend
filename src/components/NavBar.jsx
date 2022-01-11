import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Navbar, Container} from 'react-bootstrap'

function NavBar( { loggedIn } ){



    return(
      <Container>
        <Navbar  
             className="">
          <Container>
          {loggedIn ?
            <Button variant="outline-info" className="navbar-button"> 
              <Link to='/my-team' className="navbar-link"><strong> My Teams </strong></Link>
            </Button> : null}
          <Button variant="outline-info" className="navbar-button">
            <Link to='/nba-teams' className="navbar-link"><strong> NBA Teams </strong></Link>
          </Button>
          <Button variant="outline-info" className="navbar-button">
            <Link to='/community' className="navbar-link"><strong> Community Teams </strong></Link>
          </Button>
          <Button variant="outline-info" className="navbar-button">
            <Link to='/box-scores' className="navbar-link"><strong> Recent Box Scores </strong></Link>
          </Button>
          {loggedIn ? null : 
            <Button variant="outline-info" className="navbar-button">
              <Link to='sign-up' className="navbar-link"><strong> Sign Up </strong></Link>
            </Button>
            
          }
          </Container>
        </Navbar>
      </Container>
      
        
    )
}

export default NavBar