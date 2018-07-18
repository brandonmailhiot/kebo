import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import classNames from 'classnames'

import { keymap } from '../../lib';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false,
    };
  }

  onKeyDown = (keyname, event, handle) => {
    const { pitch } = this.props;
    this.setState({ isPressed: true })
    this.props.onKeyDown(pitch, keyname, event);
  }

  onKeyUp = (keyname, event) => {
    const { pitch } = this.props;
    this.setState({ isPressed: false })
    this.props.onKeyUp(pitch, keyname, event);
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
      </Hotkeys>
    );
  }
}
