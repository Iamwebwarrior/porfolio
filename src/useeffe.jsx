import React, {useEffect,useState,useRef } from "react";



export default function  Trial2(){

    const [name,setName] = useState(0)
    //const [count,setCount] = useState(0)
    const count = useRef(0);
     
    useEffect(()=>{
        count.current = count.current + 1;  
    },[name])
    

    return(
        <>
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <h1>Render Count: {count.current}</h1>
        </div>
        </>
    )
}