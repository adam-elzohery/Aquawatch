import React from 'react';
import './Footer.css';

const styles = {
  Footer: {
    top: '597px',
    left: '-10px',
    width: '389px',
    height: '70px',
    backgroundColor: '#1e1f26',
    boxShadow: '0px -1px 12px rgba(193,193,193,0.25)',
  },
};

const Footer = (props) => {
  return (
    <div style={styles.Footer}>
      {props.children}
    </div>
  );
};

export default Footer;