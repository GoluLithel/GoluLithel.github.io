import React, { useState, useEffect } from 'react';
import calculateDateDiff from '../../../../utils/calculateDateDiff';

const ExperienceDuration = () => {
  const dateOfCareerStart = '2021-04-05';
  const [currentDuration, setCurrentDuration] = useState(calculateDateDiff(new Date(dateOfCareerStart), new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDuration(calculateDateDiff(new Date(dateOfCareerStart), new Date()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <span key='experienceDuration'>{Object.entries(currentDuration)
      .filter((element) => {
        return element[1] !== 0;
      })
      .map((element, index, array) => {
        if (index === array.length - 1) {
          if (index === 0) {
            return <span key={'time' + element[1] + element[0]}>{element[1]} {element[0]}</span>
          }
          return <span key={'timeAnd' + element[1] + element[0]}>and {element[1]} {element[0]}</span>
        }
        return <span key={'time' + element[1] + element[0]}>{element[1]} {element[0]}, </span>
      })}
    </span>
  );
};

export default ExperienceDuration;
