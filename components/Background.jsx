import React from 'react';
import './Background.css';

const styles = {
  ImageContainer: {
    top: '-166px',
    left: '-195px',
    width: '765px',
    height: '1024px',
    borderRadius: '8px',
    opacity: 0.55,
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1524513778-9cb75ef422a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyMHx8YXF1YXxlbnwxfHx8fDE2OTYzMzA1NTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;