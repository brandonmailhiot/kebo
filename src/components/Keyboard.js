import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import SynthJS from 'synth-javascript';

import Note from './Keyboard/Note';
import Octave from './Keyboard/Octave';

import { keyMap } from '../keymap';

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

  onKeyDown = (event) => {
    if (event.repeat) return;

    this.state.SynthJS.stop();
    const { detune, gain, distortion, reverb } = this.props;
    const distortionEffect = distortion > 0 ? `@distortion ${distortion}/4x, ` : ``;
    const reverbEffect = reverb > 1 ? `@reverb 4/${reverb}/5, ` : ``;

    let pitch;
    Object.keys(keyMap.keys.notes).forEach(key => { 
      if (keyMap.keys.notes[key].sequence === event.key) {
        pitch = key.substr(0, key.length - 2);
      }
    })

    if (this.state.input.includes(pitch)) return;

    if (this.state.pressCount > 0) {
      const input = [pitch + this.state.currentOctave, ...this.state.input];
      this.setState({
        pressCount: this.state.pressCount + 1,
        input,
        SynthJS: new SynthJS({ 
          notes: `
            @detune ${detune},
            @gain ${gain}, 
            ${distortionEffect}
            ${reverbEffect}
            i ${input.join(' + ')}
          `
        }) 
      });
    }
    else {
      const note = pitch + this.state.currentOctave;
      this.setState({
        pressCount: this.state.pressCount + 1,
        SynthJS: new SynthJS({
          notes: `
            @detune ${detune},
            @gain ${gain},
            ${distortionEffect}
            ${reverbEffect}
            i ${note}
          `
        }),
        input: [note]
      });
    }

    this.state.SynthJS.play()
  }

  onKeyUp = (event) => {
    if (event.repeat) return;

    this.state.SynthJS.stop();
    const { detune, gain, distortion, reverb } = this.props;
    const distortionEffect = distortion > 0 ? `@distortion ${distortion}/4x, ` : ``;
    const reverbEffect = reverb > 1 ? `@reverb 4/${reverb}/5, ` : ``;

    let pitch;
    Object.keys(keyMap.keys.notes).forEach(key => { 
      if (keyMap.keys.notes[key].sequence === event.key) {
        pitch = key.substr(0, key.length - 2);
      }
    })

    if (this.state.input.includes(pitch)) return;

    if (this.state.pressCount > 1) {
      const input = this.state.input.filter(note => note !== pitch + this.state.currentOctave);
      this.setState({
        pressCount: this.state.pressCount - 1,
        SynthJS: new SynthJS({ 
          notes: `
            @detune ${detune},
            @gain ${gain},
            ${distortionEffect}
            ${reverbEffect}
            i ${input.join(' + ')}
          `
        }),
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
        />
      );
    });

    let noteboard = noteClasses.map(notes => {
      return notes.split(' ').map(note => {
        const pitch = note.toLowerCase();
        return (
          <Note
            key={note}
            displayName={note.replace('#', '♯').replace('_', '♭')}
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

    const notes_handlers = {
      'a#Down': this.onKeyDown,
      'b#Down': this.onKeyDown,
      'c#Down': this.onKeyDown,
      'd#Down': this.onKeyDown,
      'e#Down': this.onKeyDown,
      'f#Down': this.onKeyDown,
      'g#Down': this.onKeyDown,

      'aDown': this.onKeyDown,
      'bDown': this.onKeyDown,
      'cDown': this.onKeyDown,
      'dDown': this.onKeyDown,
      'eDown': this.onKeyDown,
      'fDown': this.onKeyDown,
      'gDown': this.onKeyDown,
      
      'a_Down': this.onKeyDown,
      'b_Down': this.onKeyDown,
      'c_Down': this.onKeyDown,
      'd_Down': this.onKeyDown,
      'e_Down': this.onKeyDown,
      'f_Down': this.onKeyDown,
      'g_Down': this.onKeyDown,

      'a#Up': this.onKeyUp,
      'b#Up': this.onKeyUp,
      'c#Up': this.onKeyUp,
      'd#Up': this.onKeyUp,
      'e#Up': this.onKeyUp,
      'f#Up': this.onKeyUp,
      'g#Up': this.onKeyUp,

      'aUp': this.onKeyUp,
      'bUp': this.onKeyUp,
      'cUp': this.onKeyUp,
      'dUp': this.onKeyUp,
      'eUp': this.onKeyUp,
      'fUp': this.onKeyUp,
      'gUp': this.onKeyUp,
      
      'a_Up': this.onKeyUp,
      'b_Up': this.onKeyUp,
      'c_Up': this.onKeyUp,
      'd_Up': this.onKeyUp,
      'e_Up': this.onKeyUp,
      'f_Up': this.onKeyUp,
      'g_Up': this.onKeyUp,
    };

    const octaves_handlers = {
      '1': this.setOctave,
      '2': this.setOctave,
      '3': this.setOctave,
      '4': this.setOctave,
      '5': this.setOctave,
      '6': this.setOctave,
      '7': this.setOctave
    }

    return (
      <div className="keyboard">
        <HotKeys keyMap={keyMap.keys.octaves} handlers={octaves_handlers}>
          <div className="octaveboard">{ octaveboard }</div>
        </HotKeys>
        <HotKeys keyMap={keyMap.keys.notes} handlers={notes_handlers}>
          <div className="noteboard">{ noteboard }</div>
        </HotKeys>
      </div>
    );
  }
}