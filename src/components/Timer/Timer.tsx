import { FC, useEffect, useState } from "react";
interface ITimerProps {
  duration: number;
  start: boolean;
  onTimerEnd: () => void;
}

export const Timer: FC<ITimerProps> = ({ duration, start, onTimerEnd }) => {
  const [seconds, setSeconds] = useState(duration); // Initial countdown time in seconds
  useEffect(() => {
    setSeconds(duration);
  }, [duration]);

  useEffect(() => {
    if (start) {
      let counter;
      if (seconds > 0) {
        counter = setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        onTimerEnd();
        clearTimeout(counter);
      }
    }
  }, [onTimerEnd, seconds, start]);
  const formatTime = (inSeconds: number): string => {
    return `${Math.floor(inSeconds / 60)
      .toString()
      .padStart(2, "0")}:${(inSeconds % 60).toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <p>Time Remaining: {formatTime(seconds)}</p>
    </div>
  );
};
