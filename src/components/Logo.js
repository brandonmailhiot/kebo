import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <h1 className="kebo-logo">{this.props.name}</h1>
    );
  }
}
