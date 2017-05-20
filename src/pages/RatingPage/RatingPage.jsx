import React, { PureComponent } from 'react';
import { PhotoRating } from '../../containers'; 

import './RatingPage.css';

export default class RatingPage extends PureComponent {
  render() {
    return (
      <div className="RatingPage">
        <PhotoRating />
      </div>
    );
  }
}
