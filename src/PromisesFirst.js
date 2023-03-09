import MyList from "./MyList";
import React from "react";

function fetchdata(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(["First","Second","Third","Fourth","Fifth","Sixth","Seventh"]);
        },4000);
    });
}

class PromisesFirst extends React.Component{
    state = ({items:[]});
    componentDidMount(){
        fetchdata().then((items) => {
            this.setState({items});
        })
    }
    render(){
        return <MyList list={this.state.items} />
    };
}

export default PromisesFirst;