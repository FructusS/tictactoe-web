import { useEffect, useState } from "react"

export const UserNameInput = () => {
    const[username,setUsername] = useState("")
    useEffect(()=>{
        while (username.length == 0) {
            setUsername(prompt('Please enter your name'))
        }
    },[])
}