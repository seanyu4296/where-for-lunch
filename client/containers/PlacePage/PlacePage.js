import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import { bindActionCreators } from 'redux';
import styles from './PlacePage.css';
import { fetchPlaceDetailsRequest } from '../../actions/placeActions';
// const getHours = () => {};

class PlacePage extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPlaceDetailsRequest();
  }

  render() {
    const {
      place: { data },
    } = this.props;
    const {
      /*       name,
      image_url,
      is_closed,
      url: yelpUrl,
      phone,
      display_phone,
      review_count,
      categories = [],
      rating,
      location,
      coordinates, */
      photos = [],
      /*       price,
      hours = [], */
    } =
      data || {};
    return (
      <div className={styles.root}>
        {photos.length ? (
          <Carousel>
            {photos.map((v, i) => {
              return <img className={styles.carouselImage} key={i} src={v} />;
            })}
          </Carousel>
        ) : null}
      </div>
    );
  }
}

PlacePage.propTypes = {
  place: PropTypes.shape({
    data: PropTypes.object,
  }),
  actions: PropTypes.shape({
    fetchPlaceDetailsRequest: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

PlacePage.defaultProps = {
  place: {
    data: {},
  },
};

const mapStateToProps = ({ place }) => ({ place });
const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { id },
    },
  },
) => ({
  actions: bindActionCreators(
    {
      fetchPlaceDetailsRequest: () => fetchPlaceDetailsRequest(id),
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlacePage);
