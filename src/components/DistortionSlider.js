import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class DistortionSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distortion: this.props.distortion
    };
  }

  onDistortion = (value) => {
    this.setState({distortion: value});
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
        <h2 className={classNames({
            "title": true,
            "active": this.state.distortion >= 100,
          })
        }>Fuzz</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={0}
          max={1000}
          step={100}
          defaultValue={this.props.defaultDistortion}
          onChange={this.onDistortion}
          marks={marks}
        />
      </div>
    );
  }
}