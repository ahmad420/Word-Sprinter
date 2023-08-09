// src/components/Timer.tsx
import React, { useState, useEffect } from 'react';

interface TimerProps {
  timerStarted: boolean;
  onEnd: () => void; 
}

const countdownDuration = 60; 

const Timer: React.FC<TimerProps> = ({ timerStarted, onEnd }) => {
  const [timer, setTimer] = useState(countdownDuration);

  useEffect(() => {
    if (timerStarted && timer > 0) {
      const interval = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
      return () => clearInterval(interval);
    } else if (timerStarted && timer === 0) {
      onEnd(); 
    }
  }, [timerStarted, timer, onEnd]);

  return <div className="timer">{timer}</div>;
};

export default Timer;
