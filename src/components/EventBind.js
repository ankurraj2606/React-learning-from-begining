// Four methods to bind event handlers in react are :
// a.> use arrow function where handler is used :
//     <button onClick={()=>this.clickHandler()}>Exit</button>...        if we use arrow function where handler is used
// b. use bind where handler is used.   <button onClick={this.clickHandler.bind(this)}>Exit</button>
// c. use bind in constructor : constructor(props) {
    //     super(props)
    
//     this.state = {
//          message:"Welcome"
//     }
//     //this.clickHandler = this.clickHandler.bind(this)
// }
// d.> using callback or arrow where handler is defined.
//   clickHandler = () => {
//      this.setState({
    //   message: "Bye"
//  })
//}


import React, { Component } from 'react'
export default class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Welcome"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler = () =>{
        this.setState({
            message:"Good Bye"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Exit</button>
            </div>
        )
    }
}
