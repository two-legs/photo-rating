import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRating } from '../../actions';
import { Grid, RatedPhoto } from '../../components';

class PhotoRating extends Component {
  render() {
    return (
      <Grid columns={3} animate={true}>
        {this.props.photos.map(item => (
          <RatedPhoto
            photoId={item.id}
            src={item.url}
            ratingValue={item.rating}
            key={item.id}
            onRatingUp={this.props.onRatingChange}
            onRatingDown={this.props.onRatingChange}
          />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photoRating
});

const mapDispatchToProps = {
  onRatingChange: changeRating
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoRating);
