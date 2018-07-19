import React, { Component } from 'react';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTip = createSliderWithTooltip(Slider);

export default class Detuner extends Component {
  onDetune = (value) => {
    this.props.onDetune(value);
  }
  render() {
    const marks = {
      0: '1.2k ¢',
      50: '0k ¢',
      100: '-1.2k ¢'
    }

    return (
      <div className="detuner">
        <h2 className={"title"}>Detune</h2>
        <SliderTip
          className={"slider"}
          vertical={true}
          min={-1200}
          max={1200}
          defaultValue={this.props.defaultDetune}
          onChange={this.onDetune}
          marks={marks}
          tipProps={{ 
            placement: 'top', 
            prefixCls: 'rc-slider-tooltip', 
            overlay: '10'
            }}
        />
      </div>
    );
  }
}