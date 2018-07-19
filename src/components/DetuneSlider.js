import React, { Component } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

export default class DetuneSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detune: this.props.detune
    };
  }

  onDetune = (value) => {
    this.setState({detune: value});
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
        <h2 className={classNames({
            "title": true,
            "active": this.state.detune >= 218.18181818 || this.state.detune <= -218.18181818
          })
        }>Pitch</h2>
        <Slider
          className={"slider"}
          vertical={true}
          min={-1200}
          max={1200}
          step={218.18181818}
          defaultValue={this.props.defaultDetune}
          onChange={this.onDetune}
          marks={marks}
        />
      </div>
    );
  }
}