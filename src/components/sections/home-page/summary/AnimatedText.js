import React from 'react';
import { useTrail, animated } from 'react-spring';

const AnimatedText = ({ text }) => {
  const textArray = text.split('');

  const trail = useTrail(textArray.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 100,
  });

  return (
    <div>
      <h1 style={{ fontSize: '3rem' }}>
        {trail.map((props, index) => (
          <animated.span key={index} style={props}>
            {textArray[index]}
          </animated.span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
