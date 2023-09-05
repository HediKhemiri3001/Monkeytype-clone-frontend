import { FC, useEffect, useState } from "react";
interface ITimerProps {
  duration: number;
  start: boolean;
}

export const Timer: FC<ITimerProps> = ({ duration, start }) => {
  const [seconds, setSeconds] = useState(duration); // Initial countdown time in seconds

  useEffect(() => {
    if (start) {
      // Function to update the countdown every second
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
      // Clean up the interval when the component unmounts
      return () => clearInterval(countdown);
    }
  }, [seconds, start]);

  // Format the remaining time as "mm:ss"
  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  return (
    <div>
      <p>Time Remaining: {formattedTime}</p>
    </div>
  );
};
