import { useState, useEffect, useRef } from "react";
import './Timer.css'

const Timer = ({ eventDate }) => {
  const [sec, setSec] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [hours, setHours] = useState("0");
  const [days, setDays] = useState("0");

  let interval = useRef;

  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);

        setHours(hours);
        setMinutes(minutes);
        setSec(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, [startTimer]);

  return (
    <div>
      <p>Hunt begins in</p>
      <div>
        <div className="timer days">
          {days} <br />
          <span>Days</span>
        </div>
        <div className="timer hours">
          {hours}
          <br />
          <span>Hours</span>
        </div>
        <div className="timer minutes">
          {minutes}
          <br />
          <span>Minutes</span>
        </div>
        <div className="timer seconds">
          {sec}
          <br />
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
