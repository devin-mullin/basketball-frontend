import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


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
      <Form align="center">
      <div className="border border-info rounded p-3 m-5 5 5 5 bg-secondary text-white" align="center">
          <label><strong>Search for players: </strong></label>
          <span> </span>
          <input
            className="border border-info rounded"
            align="center"
            type="text"
            id="search"
            name="search"
            onChange={handleChange}
            />
      </div>
      {searchText.length < 3 ? null:
      <div className="d-flex justify-content-center bg-secondary border border-dark rounded m-5 5 5 5">
        {searchResults?.map(result => 
        <ul className="d-inline-flex">
         <Button variant="outline-info"
         className="m-5 5 5 5"
         >
          <Link 
            className="text-white" 
            key={result.id}
            to={{pathname: `/players/${result.id}`}} 
            onClick={()=>setSearchText('')}>
                {result.name} <span> | </span> {result.tm}
          </Link>
          </Button>
        </ul>)}
      </div>
      }
      </Form>
    )
}

export default Search