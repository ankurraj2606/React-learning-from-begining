import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert(
      `the user is ${this.state.username}, & his views are ${this.state.comments} , and preferred tools is ${this.state.topic}`
    );
  };
  render() {
    return (
      <div>
        <strong>Form Component</strong>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Username : </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
            />
          </div>
          <div>
            <label>Comments : </label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <label>Topic Chosen : </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
