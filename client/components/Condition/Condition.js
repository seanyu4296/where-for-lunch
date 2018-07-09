import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';
import PricePicker from '../PricePicker/PricePicker';

export default class Condition extends React.Component {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  handleRadiusOnBlurAction = (e) => {
    this.props.action('radius', e.target.value);
  };

  handlePriceOnChange = (v) => {
    this.props.action('price', v);
  };

  render() {
    const {
      condition: { radius, price },
    } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.radiusContainer}>
          <div>Radius:</div>
          <div className={styles.radiusInputContainer}>
            <Input
              defaultValue={radius}
              onBlurAction={this.handleRadiusOnBlurAction}
            />
          </div>
          <span>meters</span>
        </div>
        <PricePicker value={price} onChange={this.handlePriceOnChange} />
      </div>
    );
  }
}

Condition.propTypes = {
  condition: PropTypes.shape({
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    price: PropTypes.object,
  }),
  action: PropTypes.func.isRequired,
};

Condition.defaultProps = {
  condition: {
    price: {},
  },
};
