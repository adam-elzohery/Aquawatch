import React from 'react';
import './HelpChatText.css';


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
  text: 'HelpChat',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;