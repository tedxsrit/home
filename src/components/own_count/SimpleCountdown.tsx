import React, { useState, useEffect } from 'react';
import './SimpleCountdown.css';

interface CountdownProps {
  targetDate: Date | string;
  onComplete?: () => void;
  showLabels?: boolean;
  className?: string;
  compact?: boolean;
}

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SimpleCountdown: React.FC<CountdownProps> = ({
  targetDate,
  onComplete,
  showLabels = true,
  className = '',
  compact = false
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const calculateTimeLeft = () => {
    const target = typeof targetDate === 'string' 
      ? new Date(targetDate) 
      : targetDate;
    
    const now = new Date().getTime();
    const difference = target.getTime() - now;

    if (difference <= 0) {
      setIsComplete(true);
      if (onComplete) onComplete();
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    // Calculate immediately
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeUnits = [
    { key: 'days', value: timeLeft.days, label: 'DAYS' },
    { key: 'hours', value: timeLeft.hours, label: 'HOURS' },
    { key: 'minutes', value: timeLeft.minutes, label: 'MINUTES' },
    { key: 'seconds', value: timeLeft.seconds, label: 'SECONDS' }
  ];

  return (
    <div className={`simple-countdown ${compact ? 'compact' : ''} ${className}`}>
      <div className="countdown-container">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.key}>
            <div className="time-unit">
              <div className="time-value">
                {formatTime(unit.value)}
              </div>
              {showLabels && (
                <div className="time-label">
                  {unit.label}
                </div>
              )}
            </div>
            
            {index < timeUnits.length - 1 && (
              <div className="separator">:</div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {isComplete && (
        <div className="countdown-complete">
         Successfully completed the Event!
        </div>
      )}
    </div>
  );
};

export default SimpleCountdown;