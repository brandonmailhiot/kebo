import React, { Component } from 'react';
import Slider from 'rc-slider';

export default class DistortionSlider extends Component {
  onDistortion = (value) => {
    this.props.onDistortion(value);
  }

  render() {
    const marks = {
      0: '100%',
      10: '-',
      20: '-',
      30: '-',
      40: '-',
      50: '50%',
      60: '-',
      70: '-',
      80: '-',
      90: '-',
      100: '0%'
    }

    return (
      <div className="distortion-slider">
        <h2 className={"title"}>Fuzz</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={0}
          max={1000}
          defaultValue={this.props.defaultDistortion}
          onChange={this.onDistortion}
          marks={marks}
        />
      </div>
    );
  }
}