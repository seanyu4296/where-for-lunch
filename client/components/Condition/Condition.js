import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';
import PriceSelector from '../PriceSelector/PriceSelector';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  handleRadiusOnBlurAction = (e) => {
    this.props.action('radius', e.target.value);
  };

  render() {
    const {
      condition: { radius },
    } = this.props;
    return (
      <div className={styles.root}>
        <span>radius:</span>
        <Input
          defaultValue={radius}
          onBlurAction={this.handleRadiusOnBlurAction}
        />
        <span>meters</span>
      </div>
    </div>
    <PriceSelector value={price} onChange={v => updater('price', v)} />
  </div>
);

Condition.propTypes = {
  condition: PropTypes.shape({
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.object,
  }),
  updater: PropTypes.func.isRequired,
};

Condition.defaultProps = {
  condition: {
    radius: 500,
    price: {},
  },
};

export default Condition;
