import React, { useState, useEffect } from 'react';

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
    <>{Object.entries(currentDuration)
      .filter((element) => {
        return element[1] !== 0;
      })
      .map((element, index, array) => {
        if (index === array.length - 1) {
          if (index === 0) {
            return <>{element[1]} {element[0]}</>
          }
          return <>and {element[1]} {element[0]}</>
        }
        return <>{element[1]} {element[0]}, </>
      })}</>
  );
};

const calculateDateDiff = (startDate, endDate) => {

    let years = endDate.getFullYear() - startDate.getFullYear();

    let months;
    if (endDate.getMonth() < startDate.getMonth()) {
        months = (endDate.getMonth() + 12) - startDate.getMonth();
        years--;
    } else if (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate()) {
        years--;
    } else {
        months = endDate.getMonth() - startDate.getMonth();
    }
    if (endDate.getDate() < startDate.getDate()) {
        months--;
    }

    let difference = endDate - startDate;

    let diffSeconds = Math.floor(difference / 1000);
    let seconds = diffSeconds % 60;
    let diffMinutes = Math.floor(diffSeconds / 60);
    let minutes = diffMinutes % 60;
    let diffHours = Math.floor(diffMinutes / 60);
    let hours = diffHours % 24;
    let diffDays = Math.floor(diffHours / 24);
    let days = diffDays - (years * 365) - (months * 30);

    return { years, months, days, hours, minutes, seconds };
}

export default ExperienceDuration;
