import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitor",
    };
    //this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
