import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const emptyFunc = () => {};

const Button = ({ onClick, children, theme, disabled }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles[theme]]: true,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={disabled ? emptyFunc : onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
