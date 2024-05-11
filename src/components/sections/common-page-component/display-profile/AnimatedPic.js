import React from 'react';
import { useSpring, animated } from 'react-spring';
import profilePic from '../../../../resources/profile-photo.png';

const AnimatedPic = ({ width }) => {

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (<animated.img style={{ ...props, width: width }} src={profilePic} alt="Bhogendra Kamble" />);
};

export default AnimatedPic;
