import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class DetuneSlider extends Component {
  render() {
    const { detune, setFX } = this.props
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
    const min = -1200.00;
    const max = 1200.00;
    const step = (max - min) / Object.keys(marks).length.toFixed(2);

    return (
      <div className="detune-slider">
        <h2 className={classNames({
          "title": true,
          "active": detune >= step || detune <= -step
        })}>Pitch</h2>

        <Slider
          className={"slider"}
          vertical={true}
          min={min}
          max={max}
          step={step}
          defaultValue={detune}
          onChange={(value) => setFX('detune', value)}
          marks={marks}
        />
      </div>
    );
  }
}