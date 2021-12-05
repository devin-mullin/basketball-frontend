import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'


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
  console.log(players[0]);
    return(
      <form>
      <div className="search">
          <label>Search for players: </label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={handleChange}
            />
      </div>
      {searchText.length < 2 ? null:
      <div>
        <p><strong>Players</strong></p>
        {searchResults?.map(result => 
        <ul><Link to=
            {{pathname: `/players/${result.id}`}} 
              onClick={()=>setSearchText('')}>
                {result.name} <span> | </span> {result.tm}
          </Link>
        </ul>)}
      </div>
      }
      </form>
    )
}

export default Search