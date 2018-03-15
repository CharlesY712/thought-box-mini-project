import React, { Component } from 'react';

class CreateThought extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div>CreateThought</div>
    );
  }
}

export default CreateThought;
