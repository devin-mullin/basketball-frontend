import { useSelector } from 'react-redux'
import { selectPlayers } from './redux/playerSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Search() {
  const [searchText, setSearchText] = useState("") 
  const players = useSelector(selectPlayers)
  const searchResults = players[0]?.filter(player=> player.name.includes(searchText))

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

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
      {searchText.length < 3 ? null:
      <div>
        <p><strong>Players</strong></p>
        {searchResults.map(result => 
        <ul><Link to=
            {{pathname: `/players/${result.id}`}} 
              onClick={()=>setSearchText('')}>
                {result.name}
          </Link>
        </ul>)}
      </div>
      }
      </form>
    )
}

export default Search