import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, '
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick.bind(this)}>
          Change message.
        </button>
      </div>
    );
  }
  handleClick() {
    this.setState({
      message: this.state.message.concat('world'),
    });
  }
}
