import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';

import '../../styles/Octave.css';

export default class Octave extends Component {
  onKeyDown = (keyname, event) => {
    if (+keyname <= 7 || +keyname >= 1) {
      this.props.setOctave(+keyname);
    }
  }

  render() {
    const { displayName, currentOctave, octave } = this.props;

    return (
      <Hotkeys
        keyName={displayName}
        onKeyDown={this.onKeyDown}
      >
        <div className={
          +currentOctave === +octave
          ? "octave-container-pressed"
          : "octave-container"
        }>
          <p className={
            +currentOctave === +octave
            ? "octave-displayName-pressed"
            : "octave-displayName"}>{ displayName }</p>
        </div>
      </Hotkeys>
    );
  }
}
