import React, { Component } from 'react';

import DetuneSlider from './MainFX/DetuneSlider';
import GainSlider from './MainFX/GainSlider';
import DistortionSlider from './MainFX/DistortionSlider';
import ReverbSlider from './MainFX/ReverbSlider';

export default class MainFX extends Component {
  render() {
    const {
      detune,
      onDetune,
      gain,
      onGain,
      distortion,
      onDistortion,
      reverb,
      onReverb
    } = this.props;

    return (
      <div>
        <DetuneSlider
          defaultDetune={detune}
          onDetune={onDetune}
        />
        <GainSlider
          defaultGain={gain}
          onGain={onGain}
        />
        <DistortionSlider
          defaultDistortion={distortion}
          onDistortion={onDistortion}
        />
        <ReverbSlider
          defaultReverb={reverb}
          onReverb={onReverb}
        />
      </div>
    )
  }
}
