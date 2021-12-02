import React, {useState,useEffect} from "react";

export default function Trial(){

const [state, setstate] = useState(0)
const [name, setName] = useState("")


function sum(){
    let count=0;
    for(let i=0;i<=100;i++){
        count=count+1;
    }
    setstate(count)
}

function username(){
    let ver="Akshay";
    setName(ver)
}

    return(
        <>
        <div className="count">

            <button onClick={sum}>click here</button>
            <h1>{state}</h1>
            <hr/>

            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <h2>{name}</h2>
            <input type="button" onClick={username}/>
            
        </div>
        </>
    )
}
