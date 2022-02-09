import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function NavBar( { loggedIn } ){

  const navigate = useNavigate()


    return(
        <div 
             className="navbar">
          {loggedIn ?
            <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('/my-team')}> 
            <p className="navbar-link"><strong> My Teams </strong></p>
            </Button> : null}
          <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('/nba-teams')}>
           <p className="navbar-link"><strong> NBA Teams </strong></p>
          </Button>
          <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('/community')}>
            <p className="navbar-link"><strong> Community Teams </strong></p>
          </Button>
          <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('/box-scores')}>
            <p className="navbar-link"><strong> Box Scores </strong></p>
          </Button>
          {loggedIn ? null :
          <> 
            <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('sign-up')}>
              <p className="navbar-link"><strong> Sign Up </strong></p>
            </Button>
            <Button variant="outline-info" className="navbar-button" onClick={()=> navigate('login')}>
              <p className="navbar-link"><strong> Log In </strong></p>
            </Button>
          </>
            
          }
        </div>

        
    )
}

export default NavBar