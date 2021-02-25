import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else return <div>Welcome Guest</div>;

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Vishwas</div>;
    // } else {
    //   message = <div>Hello Guest</div>;
    // }

    //return <div>{message}</div>;

    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    return this.state.isLoggedIn && <div>Hello Vishwas</div>;
  }
}

export default UserGreeting;
