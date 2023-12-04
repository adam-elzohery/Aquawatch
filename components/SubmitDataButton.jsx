import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '313px',
    left: '7px',
    width: '362px',
    height: '42px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px rgba(3,3,3,0.1)',
    backgroundColor: '#00b6b6',
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '21px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Submit Data',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;