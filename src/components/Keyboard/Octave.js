import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import classNames from 'classnames'


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
        <div className={classNames({
          "octave-container": true, 
          "pressed": +currentOctave === +octave
        })}>
          <p className={classNames({
            "octave-displayName": true, 
            "pressed": +currentOctave === +octave
          })}>{ displayName }</p>
        </div>
      </Hotkeys>
    );
  }
}
