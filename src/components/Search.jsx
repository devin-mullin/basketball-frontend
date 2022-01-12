import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'


function Search() {
  const [searchText, setSearchText] = useState("") 
  const players = useSelector(selectPlayers)
  
  const searchResults = players[0]?.filter(player=> 
    player.name.toLowerCase().includes(searchText.toLowerCase()) 
    || player.name.toLowerCase().startsWith(searchText.toLowerCase()) 
    || player.name.toLowerCase() === searchText.toLowerCase())

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  
    return(
    <div className="search-container">
      <Form className="search">
          <input
            className="input"
            align="right"
            type="text"
            id="search"
            name="search"
            placeholder="Search for players..."
            onChange={handleChange}
            />
      {searchText.length < 3 ? null:
      
      <Container className="results">
        {searchResults?.map(result => 
        
         <Button variant="outline-info"
         className="navbar-button"
         >
          <Link 
            className="search-link" 
            key={result.id}
            to={{pathname: `/players/${result.id}`}} 
            onClick={()=>setSearchText('')}>
              <strong>
                {result.name} <span> | </span> {result.tm}
              </strong>
          </Link>
          </Button>
        )}
      </Container>
      
      }
      </Form>
    </div>
    )
}

export default Search