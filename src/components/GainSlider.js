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

    return (
      <div className="gain-slider">
        <h2 className={classNames({
            "title": true,
            "active": this.state.gain >= 100,
          })}
        >Volume</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={0}
          max={1000}
          step={100}
          defaultValue={this.props.defaultGain}
          onChange={this.onGain}
          marks={marks}
        />
      </div>
    );
  }
}