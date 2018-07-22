import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class ReverbSlider extends Component {
  render() {
    const { reverb, setFX } = this.props;
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
    const min = 0.01;
    const max = 25.00;
    const step = (max - min) / Object.keys(marks).length.toFixed(2);

    return (
      <div className="reverb-slider">
        <h2 className={classNames({
            "title": true,
            "active": reverb >= step,
          })}
        >Reverb</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={min}
          max={max}
          step={step}
          defaultValue={reverb}
          onChange={(value) => setFX('reverb', value)}
          marks={marks}
        />
      </div>
    );
  }
}