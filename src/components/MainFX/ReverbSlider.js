import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class ReverbSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reverb: this.props.reverb
    };
  }

  onReverb = (value) => {
    this.setState({reverb: value});
    this.props.onReverb(value);
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
    const min = 0.01;
    const max = 25.00;
    const step = (max - min) / Object.keys(marks).length.toFixed(2);

    return (
      <div className="reverb-slider">
        <h2 className={classNames({
            "title": true,
            "active": this.state.reverb >= step,
          })}
        >Reverb</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={min}
          max={max}
          step={step}
          defaultValue={this.props.defaultReverb}
          onChange={this.onReverb}
          marks={marks}
        />
      </div>
    );
  }
}