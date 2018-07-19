import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class GainSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gain: this.props.gain
    };
  }

  onGain = (value) => {
    this.setState({gain: value});
    this.props.onGain(value);
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
    const min = 0.00;
    const max = 1000.00;
    const step = (max - min) / Object.keys(marks).length.toFixed(2);

    return (
      <div className="gain-slider">
        <h2 className={classNames({
            "title": true,
            "active": this.state.gain >= step,
          })}
        >Volume</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={min}
          max={max}
          step={step}
          defaultValue={this.props.defaultGain}
          onChange={this.onGain}
          marks={marks}
        />
      </div>
    );
  }
}