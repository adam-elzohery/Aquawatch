import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '473px',
    left: '4px',
    width: '368px',
    height: '65px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px rgba(3,3,3,0.1)',
    backgroundColor: '#00b6b6',
    color: '#000000',
    fontSize: '48px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '62px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Pair Sensor',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;