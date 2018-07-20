import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import classNames from 'classnames'

export default class Octave extends Component {
  render() {
    const { displayName, currentOctave, octave } = this.props;

    return (
      <HotKeys>
        <div className={classNames({
          "octave-container": true, 
          "pressed": +currentOctave === +octave
        })}>
          <p className={classNames({
            "octave-displayName": true, 
            "pressed": +currentOctave === +octave
          })}>{ displayName }</p>
        </div>
      </HotKeys>
    );
  }
}
