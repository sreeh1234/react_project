import axios from "axios"
import { useState } from "react"

function Add(){
    const [roll_no,setRoll_no] = useState('')
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [email,setEmail] = useState('')


    const handleSubmit = (e)=>{
        axios.post('http://127.0.0.1:8000/api/student/',{roll_no,name,course,email}).then((res)=>{
            setRoll_no('')
            setName('')
            setCourse('')
            setEmail('')
        }).catch(error=>console.log(error.message)
        )
    }
    return(
        <form onSubmit={handleSubmit}> 
            <input type="number" name="roll_no" id="roll_no" placeholder="ROLL_NO" value={roll_no} onChange={(e)=>setRoll_no(e.target.value)} />
            <input type="text" name="name" id="name" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" name="course" id="course" placeholder="COURSE" value={course} onChange={(e)=>setCourse(e.target.value)} />
            <input type="text" name="email" id="email" placeholder="EMAIL"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="submit" className="btn btn-outline-dark" value="Add"/>
        </form>
    )
}
export default Add