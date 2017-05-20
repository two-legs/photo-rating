import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Photo.css';

/**
 * Контейнер для фотографии. 
 */
export default class Photo extends PureComponent {
  static propTypes = {
    /**
     * Ширина изображения. 
     */
    width: PropTypes.number, 
    /**
     * Высота изображения. 
     */
    height: PropTypes.number, 
    /**
     * URL изображения. 
     */
    src: PropTypes.string.isRequired
  }

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
