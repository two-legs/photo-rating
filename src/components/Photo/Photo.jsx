import React, { PureComponent } from 'react';

import './Photo.css';

export default class Photo extends PureComponent {
  render() {
    return (
      <div
        className="Photo"
        style={{
          width: this.props.width,
          height: this.props.height,
          backgroundImage: `url(${this.props.src})`
        }}
      />
    );
  }
}
