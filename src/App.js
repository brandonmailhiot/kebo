import React, { Component } from 'react';
import Logo from './components/Logo';
import SoundPanel from './components/SoundPanel';
import './styles/index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Logo name='kebo' />
        <SoundPanel />
      </div>
    );
  }
}
