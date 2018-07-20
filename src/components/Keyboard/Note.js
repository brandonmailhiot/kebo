import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import classNames from 'classnames'

export default class Note extends Component {
  render() {
    const { displayName } = this.props;

    return (
      <HotKeys>
        <div className={classNames({
          "note-container": true,
          "pressed": false
        })}>
          <p className={classNames({
            "note-displayName": true,
            "pressed": false
          })}>
            { displayName }
          </p>
        </div>
      </HotKeys>
    );
  }
}
