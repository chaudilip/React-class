import React from 'react';

class StateMerge extends React.PureComponent {
    state = {
        first:"loading",
        second:"loading",
        third:"loading",
        fourth:"loading",
        fifth:"All messages are loaded"
    }
    constructor(){
        super();
        setTimeout(() => this.setState({first:"done"}),1000);
        setTimeout(() => this.setState({second:"done"}),2000);
        setTimeout(() => this.setState({third:"done"}),3000);
        setTimeout(() => this.setState({fourth:"done"}),4000);
        setTimeout(() => {
            this.setState(state => ({
                ...state,
                fifth:state.last,
            }));
        },5000);
    }
    render(){
        return(
            <div>
                <ul>
                    {Object.keys(this.state)
                    .filter(keys => keys !== "last")
                    .map(keys => (
                        <li key={keys}>
                            <strong>{keys} : </strong>
                            {this.state[keys]}
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }

}

export default StateMerge;
