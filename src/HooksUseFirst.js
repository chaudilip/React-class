import React from "react";
import { useState } from "react";

function HooksUseFirst(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    return(
        <>
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <p>{name}</p>
            <input 
                type="number"
                value={age}
                onChange={(e)=> setAge(e.target.value)} />
                <p>{age}</p>
        </>
    );
}

export default HooksUseFirst;