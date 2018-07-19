import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <h1 className="kebo-logo">
        <p>{this.props.name}</p>
      </h1>
    );
  }
}
