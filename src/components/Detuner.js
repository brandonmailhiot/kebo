import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';

export default class Detuner extends Component {
  onDetune = (value) => {
    console.log(value)
    this.props.onDetune(value);
  }
  render() {
    return (
      <div className="detuner">
        <h2 className={"title"}>Detuner</h2>
        <Slider 
          className={"slider"}
          vertical={true}
          min={-1000}
          max={1000}
          defaultValue={this.props.defaultDetune}
          onChange={this.onDetune}
        />
      </div>
    );
  }
}