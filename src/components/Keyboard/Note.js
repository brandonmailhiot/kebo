import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import classNames from 'classnames'

export default class Note extends Component {
  render() {
    const { displayName, input, pitch } = this.props;
    const isPressed = input.map(i => i.substr(0, i.length-1)).includes(pitch);

    return (
      <HotKeys>
        <div className={classNames({
          "note-container": true,
          "pressed": isPressed
        })}>
          <p className={classNames({
            "note-displayName": true,
            "pressed": isPressed
          })}>
            { displayName }
          </p>
        </div>
      </HotKeys>
    );
  }
}
