import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricePicker.css';

export default class PricePicker extends React.Component {
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
        <label>Price Range</label>
        {PricePicker.choices.map(c => (
          <label key={c.id}>
            <input
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

PricePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
