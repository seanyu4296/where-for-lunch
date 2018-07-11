import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import styles from './Place.css';

const Place = ({ place: { data } }) => {
  const { name, address, phone, categories, price, reviewCount, rating, id } =
    data || {};
  return (
    <div className={styles.root}>
      <div className={styles.name}>{name || 'Where for lunch?'}</div>
      {isEmpty(data) ? (
        <div className={styles.box} />
      ) : (
        <Link to={`/place/${id}`} className={styles.box}>
          <div>{address}</div>
          <div>{phone}</div>
          <div>{categories && categories.join(', ')}</div>
          <div>{price}</div>
          {rating && (
            <div className={styles.rating}>
              <div className={styles.ratingScore}>{reviewCount} reviews</div>
              <div className={styles.stars}>
                <div className={styles.emptyStars} />
                <div
                  className={styles.fullStars}
                  style={{ width: `${(rating / 5) * 100}%` }}
                />
              </div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
