import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'
function Password() {
     const {user} = useContext(UserContext)
 
        if(!user) return <div>Please Login First</div> 
     return <div> Password of {user.username} is {user.password} </div>
    
  
}

export default Password
