import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';

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
    );
  }
}
