import React from 'react';
import './HomeIcon.css';


const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '28px',
    top: '599px',
    left: '30px',
    width: '28px',
    height: '28px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none">
    </path>
    <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;