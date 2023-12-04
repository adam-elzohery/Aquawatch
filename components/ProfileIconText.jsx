import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    lineHeight: '16px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Profile',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;