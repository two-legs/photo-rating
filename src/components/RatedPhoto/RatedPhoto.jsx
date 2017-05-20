import React, { PureComponent } from 'react';
import Photo from '../Photo/Photo';

import './RatedPhoto.css';

export default class RatedPhoto extends PureComponent {
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
          onClick={this.handleRatingUp}
          onContextMenu={this.handleRatingDown}
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

class RatingBadge extends PureComponent {
  render() {
    return (
      <div
        className="RatedPhoto__badge"
        onClick={this.props.onClick}
        onContextMenu={this.props.onContextMenu}
      >
        {this.props.value}
      </div>
    );
  }
}
