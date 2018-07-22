import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class GainSlider extends Component {
  render() {
    const { gain, setFX } = this.props;
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
    const min = 0.00;
    const max = 1000.00;
    const step = (max - min) / Object.keys(marks).length.toFixed(2);

    return (
      <div className="gain-slider">
        <h2 className={classNames({
          "title": true,
          "active": gain >= step,
        })}>Volume</h2>

        <Slider
          className={"slider"}
          vertical={true}
          min={min}
          max={max}
          step={step}
          defaultValue={gain}
          onChange={(value) => setFX('gain', value)}
          marks={marks}
        />
      </div>
    );
  }
}