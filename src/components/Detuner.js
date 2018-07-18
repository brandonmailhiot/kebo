import React, { Component } from 'react';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTip = createSliderWithTooltip(Slider);

export default class Detuner extends Component {
  onDetune = (value) => {
    this.props.onDetune(value);
  }
  render() {
    return (
      <div className="detuner">
        <h2 className={"title"}>Detune</h2>
        <SliderTip
          className={"slider"}
          vertical={true}
          min={-1000}
          max={1000}
          defaultValue={this.props.defaultDetune}
          onChange={this.onDetune}
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