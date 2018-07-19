import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import DetuneSlider from './components/DetuneSlider';
import GainSlider from './components/GainSlider';
import DistortionSlider from './components/DistortionSlider';
import Logo from './components/Logo';

import './styles/index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detune: 0,
      gain: 500,
      distortion: 0
    };
  }

  onDetune = (amount) => {
    this.setState({ detune: amount });
  }

  onGain = (amount) => {
    this.setState({ gain: amount });
  }

  onDistortion = (amount) => {
    this.setState({ distortion: amount });
  }

  render() {
    return (
      <div className="app-container">
        <Logo name='kebo' />
        <div className={"sound-panel"}>
          <Keyboard 
            detune={this.state.detune}
            gain={this.state.gain}
            distortion={this.state.distortion}
          />
          <DetuneSlider
            defaultDetune={this.state.detune}
            onDetune={this.onDetune}
          />
          <GainSlider
            defaultGain={this.state.gain}
            onGain={this.onGain}
          />
          <DistortionSlider
            defaultDistortion={this.state.distortion}
            onDistortion={this.onDistortion}
          />
        </div>
      </div>
    );
  }
}
