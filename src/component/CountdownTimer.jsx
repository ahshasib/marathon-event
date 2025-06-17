// CountdownTimer.jsx
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 90,
  strokeWidth: 6,
  colors: [["#1e40af"]],
};

const renderTime = (dimension, time) => (
  <div className="flex flex-col items-center text-xs">
    <div className="text-xl font-bold">{time}</div>
    <div className="uppercase">{dimension}</div>
  </div>
);

const getTimeSeconds = (time) => (minuteSeconds - time) || 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const CountdownTimer = ({ targetDate }) => {
  if (!targetDate) {
    return <p className="text-red-500">No date provided</p>;
  }

  const endTime = new Date(targetDate).getTime() / 1000;
  const now = Date.now() / 1000;
  const remainingTime = Math.max(0, endTime - now);

  return (
    <div className="flex gap-3 flex-wrap justify-center mt-4">
      <CountdownCircleTimer {...timerProps} duration={daySeconds} initialRemainingTime={remainingTime}>
        {({ elapsedTime }) =>
          renderTime("Days", getTimeDays(remainingTime - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer {...timerProps} duration={hourSeconds} initialRemainingTime={remainingTime % daySeconds} onComplete={() => ({ shouldRepeat: true })}>
        {({ elapsedTime }) =>
          renderTime("Hours", getTimeHours(remainingTime - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer {...timerProps} duration={minuteSeconds} initialRemainingTime={remainingTime % hourSeconds} onComplete={() => ({ shouldRepeat: true })}>
        {({ elapsedTime }) =>
          renderTime("Minutes", getTimeMinutes(remainingTime - elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
