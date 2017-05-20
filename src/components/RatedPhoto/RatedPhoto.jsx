import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';

import './RatedPhoto.css';

/**
 * Фото с оценкой. 
 */
export default class RatedPhoto extends PureComponent {
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
    src: PropTypes.string.isRequired,
    /**
     * ИД фотографии. 
     */
    photoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    /**
     * Рейтинг изображения. 
     */
    ratingValue: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.handleRatingUp = this.handleRatingUp.bind(this);
    this.handleRatingDown = this.handleRatingDown.bind(this);
  }

  render() {
    return (
      <div
        className="RatedPhoto"
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      >
        <RatingBadge
          value={this.props.ratingValue}
          onRatingUpClick={this.handleRatingUp}
          onRatingDownClick={this.handleRatingDown}
        />
        <Photo
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }

  handleRatingUp(event) {
    if (this.props.onRatingUp) {
      this.props.onRatingUp(this.props.photoId, this.props.ratingValue + 1);
    }
  }

  handleRatingDown(event) {
    if (this.props.onRatingDown) {
      this.props.onRatingDown(this.props.photoId, this.props.ratingValue - 1);
    }

    event.preventDefault();
  }
}

/**
 * Рейтинг фотографии. 
 */
class RatingBadge extends Component {
  static propTypes = {
    /**
     * Значение рейтинга. 
     */
    value: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { ripple: false };
  }

  render() {
    const ripple = this.state.ripple;

    return (
      <div
        className={
          'RatedPhoto__badge ' +
            (ripple ? `RatedPhoto__badge_ripple-${ripple}` : '')
        }
        onClick={this.handleRatingUp.bind(this)}
        onContextMenu={this.handleRatingDown.bind(this)}
        ref={element => (this.element = element)}
      >
        {this.props.value}
      </div>
    );
  }

  componentDidMount() {
    this.element.addEventListener('animationend', this.rippleDone.bind(this));
  }

  componentWillUnmount() {
    this.element.removeEventListener('animationend', this.rippleDone);
  }

  rippleDone() {
    this.setState({ ripple: false });
  }

  handleRatingUp(event) {
    if (this.props.onRatingUpClick) {
      this.props.onRatingUpClick(event);
    }

    this.setState({ ripple: 'up' });
  }

  handleRatingDown(event) {
    if (this.props.onRatingDownClick) {
      this.props.onRatingDownClick(event);
    }

    this.setState({ ripple: 'down' });
  }
}
