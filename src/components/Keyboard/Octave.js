import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import classNames from 'classnames'

export default class Octave extends Component {
  render() {
    const { displayName } = this.props;

    return (
      <HotKeys>
        <div className={classNames({
          "octave-container": true, 
          "pressed": false
        })}>
          <p className={classNames({
            "octave-displayName": true, 
            "pressed": false
          })}>{ displayName }</p>
        </div>
      </HotKeys>
    );
  }
}
