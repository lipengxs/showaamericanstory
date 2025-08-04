'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer; 