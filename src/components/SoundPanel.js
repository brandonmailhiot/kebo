import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import MainFX from './components/MainFX';
import Analyser from './components/Analyser';

export default class Logo extends Component {
  render() {
    return (
      <div className={"sound-panel"}>
        <Keyboard />
        <MainFX />
        <Analyser />
      </div>
    );
  }
}