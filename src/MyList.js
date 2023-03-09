import React from "react";

class MyList extends React.Component{
    render(){
        const {list} = this.props;
        return(
            <div>
                <ul>
                    {list.map((i) => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MyList;