import React, { Component } from 'react';
import Codebeat from 'codebeat';
import Hotkeys from 'react-hot-keys';

import { keymap } from '../lib.js';
import '../styles/Note.css';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false,
      Codebeat: new Codebeat({})
    };
  }

  onKeyDown = (keyname, event) => {
    const { pitch, currentOctave } = this.props;

    this.setState({
      isPressed: true,
      Codebeat: new Codebeat({
        notes: `i ${pitch + currentOctave}`
      }),
    });

    this.state.Codebeat.play()
  }

  onKeyUp = (keyname, event) => {
    this.state.Codebeat.stop();

    this.setState({
      isPressed: false,
      Codebeat: new Codebeat({}),
    });
  }

  render() {
    const { pitch, displayName } = this.props;
    const { isPressed } = this.state;

    return (
      <Hotkeys
        keyName={keymap[pitch]}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
      >
        <div className={
          isPressed
          ? "note-container-pressed"
          : "note-container"
        }>
          <p className={
            isPressed
            ? "note-displayName-pressed"
            : "note-displayName"}>{ displayName }</p>
        </div>
      </Hotkeys>
    );
  }
}
