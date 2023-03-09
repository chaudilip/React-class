import React from "react";
import { useState } from "react";

function fetchuserdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id:1,name:"dilip"});
        },3000);
    })
}

export default function HooksUseEffect(){
    const [id,setId] = useState("");
    const [name,setName]= useState("");

    React.useEffect(() =>{
        fetchuserdata().then((user) => {
            setId(user.id);
            setName(user.name);
        })
    },[]);

    return(
        <div>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
        </div>
    );
}