import React from "react";

class MyButton extends React.Component{
    render(){
        const {disable,text} = this.props;
        return(
            <div>
                <button disabled={disable} >{text}</button>
            </div>
        );
    }
}

export default MyButton;