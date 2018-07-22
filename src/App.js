import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import MainFX from './components/MainFX';
import Analyser from './components/Analyser';
import Logo from './components/Logo';

import './styles/index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detune: 0,
      gain: 500,
      distortion: 0,
      reverb: 0.01,
      frequencyData: []
    };
  }

  setFX = (type, amount) => {
    this.setState({ [type]: amount });
  }

  setFrequencyData = (frequencyData) => {
    this.setState({ frequencyData })
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
            reverb={this.state.reverb}
            setFrequencyData={this.setFrequencyData}
          />
          <MainFX 
            detune={this.state.detune}
            gain={this.state.gain}
            distortion={this.state.distortion}
            reverb={this.state.reverb}
            setFX={this.setFX}
          />
          <Analyser 
            frequencyData={this.state.frequencyData}
          />
        </div>
      </div>
    );
  }
}
