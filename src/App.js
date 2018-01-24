import React, { Component } from 'react';

import Note from './components/Note';
import Octave from './components/Octave';
import Logo from './components/Logo';

import './styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOctave: 3,
    }
  }

  setOctave = (octave) => {
    this.setState({ currentOctave: octave });
  }

  render() {
    const octaveClasses = [0,1,2,3,4,5,6,7];
    const noteClasses = [
      'A# B# C# D# E# F# G#',
      'A B C D E F G',
      'A_ B_ C_ D_ E_ F_ G_',
    ];
    const noteboardClasses = [
      'noteboard-sharps',
      'noteboard-naturals',
      'noteboard-flats',
    ];

    const octaveboard = octaveClasses.map(octave => {
      const name = octave.toString();
      return (<Octave
        key={name}
        displayName={name}
        octave={octave}
        currentOctave={this.state.currentOctave}
        setOctave={this.setOctave}
      />);
    });

    let noteboard = noteClasses.map(notes => {
      return notes.split(' ').map(note => {
        const pitch = note.toLowerCase();
        return (<Note
          key={note}
          displayName={note}
          pitch={pitch}
          currentOctave={this.state.currentOctave}
        />);
      })
    });

    noteboard = noteboard.map((noteClass, i) => {
      return <div key={i} className={ noteboardClasses[i] }>{ noteClass }</div>
    });

    return (
      <div className="app-container">
        <Logo />
        <div className="controlboard">
          <div className="octaveboard">{ octaveboard }</div>
          <div className="noteboard">{ noteboard }</div>
        </div>
      </div>
    );
  }
}
