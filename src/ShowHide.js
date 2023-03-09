import React , {useState} from "react";
import HooksUseEffect from "./HooksUseEffect";

const ShowUSer = ({show}) => (show ? <HooksUseEffect /> : null);

function ShowHide(){
    const [show,setShow] = useState(false);
    return(
        <div>
    <button onClick={() => setShow(!show)} >{show ? "Hide user" : "show User"}</button>
    <ShowUSer show={show} />
        </div>
    );
}
export default ShowHide;


