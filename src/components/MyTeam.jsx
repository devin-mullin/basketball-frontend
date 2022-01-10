import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { selectMyTeams, byId, add } from './redux/myTeamSlice'
import MyTeamDetail from "./MyTeamDetail"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function MyTeam({ user }){ 
   const [teamName, setTeamName] = useState("");
   const importTeams = useSelector(selectMyTeams)
    
//    console.log(useSelector(selectMyTeams))
//     if (importTeams === true){  
//    var myTeams = importTeams[0]?.filter(myTeam=>myTeam.user_id === user.id)
//     }
   
   const dispatch = useDispatch()

   let navigate = useNavigate()

   const handleSubmit = (e, teamName) =>{
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
        })
        .catch((error) => {
        console.error('Error:', error);
        });
            }

    return(
        <div>
            <h2 className="team">My Teams</h2>
            {/* <Form 
        align="center" 
        display="block"
        className="border border-info p-3 w-25 bg-secondary text-white m-2 2 2 2" 
        onSubmit={(e)=>e.preventDefault()}
        ><p><strong>create new team:</strong></p>
        <label>
            Team Name:
            <input type="text" 
            name="username" 
            className="border border-info rounded m-2 2 2 2 "
            onChange={(e)=> setTeamName(e.target.value)}/>
        </label>
        <Button 
        type="submit" 
        className="border border-info rounded text-white m-2 2 2 2 " 
        onClick={handleSubmit}
        >
            submit
        </Button>
        </Form> */}
            
        
             <MyTeamDetail user={user}/>
            
        </div>
    )
}

export default MyTeam