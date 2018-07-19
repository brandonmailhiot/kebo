import React, { Component } from 'react';
import Slider from 'rc-slider';

export default class GainSlider extends Component {
  onGain = (value) => {
    this.props.onGain(value);
  }
  
  render() {
    const marks = {
      0: '1k db',
      10: '-',
      20: '-',
      30: '-',
      40: '-',
      50: '0.5k db',
      60: '-',
      70: '-',
      80: '-',
      90: '-',
      100: '0k db'
    }

    return (
      <div className="gain-slider">
        <h2 className={"title"}>Volume</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={0}
          max={1000}
          defaultValue={this.props.defaultGain}
          onChange={this.onGain}
          marks={marks}
        />
      </div>
    );
  }
}