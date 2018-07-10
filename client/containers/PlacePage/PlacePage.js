import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';
import { bindActionCreators } from 'redux';
import styles from './PlacePage.css';
import { fetchPlaceDetailsRequest } from '../../actions/placeActions';
import Spinner from '../../components/Spinner/Spinner';

export class PlacePage extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPlaceDetailsRequest();
  }

  render() {
    const {
      place: { data, fetching },
    } = this.props;
    const {
      name,
      location,
      categories = [],
      rating,
      is_closed: isClosed,
      url: yelpUrl,
      display_phone: displayPhone,
      // coordinates,
      photos = [],
      review_count: reviewCount,
      hours = [],
    } =
      data || {};
    const { city, display_address: address = [] } = location || {};
    return fetching && isEmpty(data) ? (
      <div className={styles.root}>
        <Spinner />
      </div>
    ) : (
      <div className={styles.root}>
        {photos.length >= 1 ? (
          <Carousel>
            {photos.map((v, i) => {
              return (
                <img
                  key={v}
                  src={v}
                  className={classNames({
                    [styles.carouselImage]: true,
                    [styles.coverImage]: i === 0,
                  })}
                />
              );
            })}
          </Carousel>
        ) : null}
        <div className={styles.contentContainer}>
          <div className={styles.topContent}>
            <div className={styles.headerContainer}>
              <h3 className={styles.title}>{name}</h3>
              <span className={styles.subtitle}>
                {city} ·{' '}
                {categories.map(v => v.title).map(v => (
                  <div className={styles.categoryContainer} key={v}>
                    <span className={styles.category}>{v}</span>
                  </div>
                ))}
              </span>
              <a href={yelpUrl} className={styles.yelpButton}>
                <span className={styles.yelpText}>View in Yelp</span>
              </a>
            </div>
            <div className={styles.rightHeaderContainer}>
              <div
                className={classNames({
                  [styles.ratingContainer]: true,
                  [styles.lowRating]: rating,
                  [styles.midRating]: rating > 2,
                  [styles.highRating]: rating > 4,
                })}
              >
                <span className={styles.rating}>{rating}</span>
                <span className={styles.ratingDenominator}>/5</span>
              </div>
              <p
                className={classNames({
                  [styles.openOrClosed]: true,
                  [styles.open]: !isClosed,
                  [styles.closed]: isClosed,
                })}
              >
                {isClosed ? 'CLOSED' : 'OPEN'}
              </p>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.detailsContainer}>
            <div className={styles.mainDetailsContainer}>
              <h4 className={styles.detailsHeader}>Details</h4>
              <div className={styles.detail}>
                <p className={styles.key}>Phone</p>
                <p className={styles.value}>{displayPhone}</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Address</p>
                <p className={styles.value}>{address.join(', ')}</p>
              </div>
              <div className={styles.detail}>
                <p className={styles.key}>Review Count in Yelp</p>
                <p className={styles.value}>{reviewCount}</p>
              </div>
              {hours[0] ? (
                <div className={styles.detail}>
                  <p className={styles.key}>Opening Hours</p>
                  {[
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ].map((v, i) => {
                    return (
                      <p className={styles.value} key={v}>
                        {v}: {hours[0].open[i].start} - {hours[0].open[i].end}
                      </p>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <div className={styles.mapContainer} />
          </div>
        </div>
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