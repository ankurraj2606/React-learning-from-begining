import React, { Component } from 'react'

export default class Increment extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
//    handleIncrement(){
//     this.setState({
//         count:this.state.count+1
//     }, ()=>{console.log("count now",this.state);})
// }

handleIncrement(){
    this.setState((prevState, props)=>({
     count:prevState.count+1
    }), ()=>{console.log("count now",this.state);})
}

incrementFive(){
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
}

    render() {
        return (
            <div>
                <div>the count is:{this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
