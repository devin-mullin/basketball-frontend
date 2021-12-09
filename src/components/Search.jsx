import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Navbar, Container } from 'react-bootstrap'


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
      <Form
          className="border border-info rounded p-3 m-4 4 4 4 bg-secondary text-white" align="center">
          <input
            className="border border-info rounded mb-2 "
            align="right"
            type="text"
            id="search"
            name="search"
            placeholder="Search for players..."
            onChange={handleChange}
            />
      {searchText.length < 3 ? null:
      <Container className="flex bg-secondary border border-dark rounded">
        {searchResults?.map(result => 
        
         <Button variant="outline-info"
         className="flex"
         >
          <Link 
            className="text-white" 
            key={result.id}
            to={{pathname: `/players/${result.id}`}} 
            onClick={()=>setSearchText('')}>
                {result.name} <span> | </span> {result.tm}
          </Link>
          </Button>
        )}
      </Container>
      
      }
      </Form>
    )
}

export default Search