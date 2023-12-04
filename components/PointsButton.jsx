import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '412px',
    left: '191px',
    width: '181px',
    height: '52px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px rgba(3,3,3,0.1)',
    backgroundColor: '#00b6b6',
    color: '#000000',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '31px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Points',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;