import { use, useState } from "react";

function StudentForm1(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("")

    const handleSubmit=(event)=>{
event.preventDefault();
alert("Name"+name+"\nEmail"+email+"Age"+age);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} required></input>

            <label>Email</label>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} required></input>

            <label>Age</label>
            <input type="number" value={age} onChange={(event)=>setAge(event.target.value)} required></input>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default StudentForm1;