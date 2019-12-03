 import React from "react";
 import axios from "axios";

 export default class FloorList extends React.Component {
     state = {
         floors: [],
     };

componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        console.log(res);
        this.setState({floors: res.data});
    });
}

render() {
    return (
        <b>
            {this.state.floors.map(floor => <b key={floor.id}>{floor.name}</b>)}
        </b>
    )
}

 }