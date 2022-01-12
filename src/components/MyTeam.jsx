import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import Select from 'react-select'
import { add } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function MyTeam({ user, setSelectedTeam, selectedTeam }){ 
   const [teamName, setTeamName] = useState("");


   const dispatch = useDispatch()
   let navigate = useNavigate()

   const list = user.user_teams



   const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('http://localhost:3000/user_teams', {
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
        navigate('/')
        navigate('/my-team')
        alert(`say hello to ${teamName}, the hottest new upstarts in the league`)
        })
        .catch((error) => {
        console.error('Error:', error);
        });
            }

    return(
        <div>
            <h2 className="team">My Teams</h2> 
            <Select
            options={list}
            getOptionLabel={(list=>list.name)}
            getOptionValue={list=>list.id}
            onChange={(e)=>setSelectedTeam(e.id)}
            ></Select>
             
             <MyTeamDetail user={user} teamId={selectedTeam}/>

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