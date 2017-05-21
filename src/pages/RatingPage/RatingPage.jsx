import React, { PureComponent } from 'react';
import { PhotoRating } from '../../containers'; 

import './RatingPage.css';

export default class RatingPage extends PureComponent {
  render() {
    return (
      <div className="RatingPage">
        <h1 className="RatingPage__header">photo rating</h1>
        <div className="RatingPage__container">
          <PhotoRating />
        </div>
      </div>
    );
  }
}
