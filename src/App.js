import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import DetuneSlider from './components/DetuneSlider';
import Logo from './components/Logo';

import './styles/index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detune: 0
    };
  }
  onDetune = (amount) => {
    this.setState({ detune: amount });
  }

  render() {
    return (
      <div className="app-container">
        <Logo name='kebo' />
        <div className={"sound-panel"}>
          <Keyboard 
            detune={this.state.detune}
          />
          <DetuneSlider
            defaultDetune={this.state.detune}
            onDetune={this.onDetune}
          />
        </div>
      </div>
    );
  }
}
