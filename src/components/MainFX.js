import React, { Component } from 'react';

import DetuneSlider from './MainFX/DetuneSlider';
import GainSlider from './MainFX/GainSlider';
import DistortionSlider from './MainFX/DistortionSlider';
import ReverbSlider from './MainFX/ReverbSlider';

export default class MainFX extends Component {
  render() {
    const {
      detune,
      gain,
      distortion,
      reverb,
      setFX
    } = this.props;

    return (
      <div>
        <DetuneSlider
          detune={detune}
          setFX={setFX}
        />
        <GainSlider
          gain={gain}
          setFX={setFX}
        />
        <DistortionSlider
          distortion={distortion}
          setFX={setFX}
        />
        <ReverbSlider
          reverb={reverb}
          setFX={setFX}
        />
      </div>
    )
  }
}
