import React, { Component } from 'react';
import SynthJS from 'synth-javascript';

import Note from './Keyboard/Note';
import Octave from './Keyboard/Octave';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressCount: 0,
      currentOctave: 4,
      SynthJS: new SynthJS({}),
      input: []
    }
  }

  setOctave = (octave) => {
    this.setState({ currentOctave: octave });
  }

  onKeyDown = (pitch, keyname, event) => {
    this.state.SynthJS.stop();
    const { detune } = this.props;

    if (this.state.pressCount > 0) {
      const input = [pitch + this.state.currentOctave, ...this.state.input];
      this.setState({
        pressCount: this.state.pressCount + 1,
        input,
        SynthJS: new SynthJS({ 
          notes: `@detune ${detune}, i ${input.join(' + ')}`
        }) 
      });
    }
    else {
      const note = pitch + this.state.currentOctave;
      this.setState({
        pressCount: this.state.pressCount + 1,
        SynthJS: new SynthJS({
          notes: `@detune ${detune}, i ${note}`
        }),
        input: [note]
      });
    }

    this.state.SynthJS.play()
  }

  onKeyUp = (pitch, keyname, event) => {
    this.state.SynthJS.stop();
    const { detune } = this.props;

    if (this.state.pressCount > 1) {
      const input = this.state.input.filter(note => note !== pitch + this.state.currentOctave);
      this.setState({
        pressCount: this.state.pressCount - 1,
        SynthJS: new SynthJS({ notes: `@detune ${detune}, i ${input.join(' + ')}` }),
        input
      });
      this.state.SynthJS.play();
    }
    else {
      this.setState({
        pressCount: 0,
        SynthJS: new SynthJS({ notes: `` }),
        input: []
      });
    }
  }

  render() {
    const octaveClasses = '𝄞 1 2 3 4 5 6 7'.split(' ');
    const noteClasses = [
      '♯ A# B# C# D# E# F# G#',
      '♮ A B C D E F G',
      '♭ A_ B_ C_ D_ E_ F_ G_',
    ];
    const noteboardClasses = [
      'noteboard-sharps',
      'noteboard-naturals',
      'noteboard-flats',
    ];

    const octaveboard = octaveClasses.map(octave => {
      return (
        <Octave
          key={octave}
          displayName={octave}
          octave={octave}
          currentOctave={this.state.currentOctave}
          setOctave={this.setOctave}
        />
      );
    });

    let noteboard = noteClasses.map(notes => {
      return notes.split(' ').map(note => {
        const pitch = note.toLowerCase();
        return (
          <Note
            key={note}
            displayName={note}
            pitch={pitch}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
          />
        );
      })
    });

    noteboard = noteboard.map((noteClass, i) => {
      return <div key={i} className={ noteboardClasses[i] }>{ noteClass }</div>
    });

    return (
      <div className="keyboard">
        <div className="octaveboard">{ octaveboard }</div>
        <div className="noteboard">{ noteboard }</div>
      </div>
    );
  }
}