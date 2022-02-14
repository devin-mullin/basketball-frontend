import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import Select from 'react-select'
import { add, selectMyTeams, fetchMyTeams } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function MyTeam({ user, setSelectedTeam, selectedTeam }){ 
   const [teamName, setTeamName] = useState("");
    const [teamOptions, setTeamOptions] = useState([])

   const dispatch = useDispatch()
   let navigate = useNavigate()
   const allTeams = useSelector(selectMyTeams)

    const getMyTeams = () =>{
        const userId = user.id
        const myTeams = allTeams[0]?.filter(team => team.user_id === userId)
        return myTeams 
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
             backgroundColor: state.isSelected ? '#c0ffee' : 'black',
            color: state.isSelected ? 'black' : 'white',
            border: '1px dotted aqua',
            borderRadius: '10px',
            cursor: 'pointer'
            }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'black' : 'black',
            borderRadius: '10px',
            opacity: 0.9,
            cursor: 'pointer' 
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#c0ffee' : '#525252',
            color: 'white',
            borderRadius: '10px',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#c0ffee' : '#525252',
            color: 'white',
            borderRadius: '10px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'white',
            opacity: 0.8,
        })
    }    


   const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('https://nameless-ravine-11360.herokuapp.com/user_teams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: user.id,
            name: teamName
        }),
    })
        .then(response => response.json())
        .then(()=>{
            dispatch(add({
            user_id: user.id,
            name: teamName,
            players: []
        }))
        alert(`say hello to ${teamName}, the hottest new upstarts in the league`)
        navigate('/')
        navigate('/my-team')
        })
        .catch((error) => {
        console.error('Error:', error);
        });
            }


    return(
        <div className="team">
            <div className="back-button-div">
                  <button className="back-button" 
                          onClick={()=>navigate(-1)}>
                            back
                  </button>
              </div>
            <h2 className="headers">My Teams</h2> 
            <Select
            className="myteam-select"
            options={getMyTeams()}
            styles={customStyles}
            getOptionLabel={(list=>list.name)}
            getOptionValue={list=>list.id}
            placeholder= {"Select your team..."}
            onChange={(e)=>setSelectedTeam(e)}
            ></Select>
             {selectedTeam !== '' ?  <MyTeamDetail user={user} teamId={selectedTeam.id}/>
            : null 
            }

        <Form 
        align="center" 
        display="block"
        className="login" 
        onSubmit={(e)=>e.preventDefault()}
        ><p><strong>create new team?</strong></p>
        <label>
            team name:
            <br/><input type="text" 
            name="username" 
            className="label"
            onChange={(e)=> setTeamName(e.target.value)}/>
        </label>
        <br/>
        <Button 
        type="submit" 
        className="myteam-button" 
        onClick={handleSubmit}
        >
            submit
        </Button>
        </Form>
            
        </div>
    )
}

export default MyTeam