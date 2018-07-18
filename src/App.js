import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';

import Keyboard from './components/Keyboard'
import Logo from './components/Logo';

import './styles/index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Logo name='🔥 kebo' />
        <Keyboard />
      </div>
    );
  }
}
