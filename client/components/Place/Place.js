import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = ({ place: { data } }) => {
  const { name, address, phone, categories, price, reviewCount, rating } =
    data || {};
  return (
    <div className={styles.root}>
      <div className={styles.name}>{name || 'Where for lunch?'}</div>
      <div className={styles.box}>
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
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
