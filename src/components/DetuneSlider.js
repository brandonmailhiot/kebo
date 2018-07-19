import React, { Component } from 'react';
import Slider from 'rc-slider';

export default class DetuneSlider extends Component {
  onDetune = (value) => {
    this.props.onDetune(value);
  }

  render() {
    const marks = {
      0: '100%',
      10: '-',
      20: '-',
      30: '-',
      40: '-',
      50: '0%',
      60: '-',
      70: '-',
      80: '-',
      90: '-',
      100: '-100%'
    }

    return (
      <div className="detune-slider">
        <h2 className={"title"}>Pitch</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={-1200}
          max={1200}
          defaultValue={this.props.defaultDetune}
          onChange={this.onDetune}
          marks={marks}
        />
      </div>
    );
  }
}