import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceSelector.css';

export default class PriceSelector extends React.Component {
  static choices = Array(4)
    .fill(null)
    .map((v, i) => ({
      id: i + 1,
      text: Array(i + 1)
        .fill('$')
        .join(''),
    }));

  handleChange = (e) => {
    const { value: currVal, onChange } = this.props;
    const { value, checked } = e.target;
    const newVal = {
      ...currVal,
      [value]: checked,
    };
    if (typeof onChange === 'function') onChange(newVal);
  };
  render() {
    return (
      <div className={styles.root}>
        <label>Price Selector</label>
        {PriceSelector.choices.map(c => (
          <label key={c.id} htmlFor={c.text}>
            <input
              key={c.id}
              type="checkbox"
              value={c.id}
              name={c.text}
              checked={!!this.props.value[c.id]}
              onChange={this.handleChange}
            />
            {c.text}
          </label>
        ))}
      </div>
    );
  }
}

PriceSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
