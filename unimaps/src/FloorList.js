 import React from "react";
 import axios from "axios";

 export default class FloorList extends React.Component {
     state = {
         floors: [],
     };

componentDidMount(){
    axios.get(`https://unimaps-back.herokuapp.com/floor`).then(res => {
        console.log(res);
        this.setState({floors: res.data});
    });
}

render() {
    return (
        <b>
            {this.state.floors.map(floor => <b key={floor.building_id}>{floor.building_id}</b>)}
        </b>
    )
}

 }