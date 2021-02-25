import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <div>
          This is me!{this.props.name} a.k.a {this.props.heroname}
        </div>
      </div>
    );
  }
}
export default Greeting;
