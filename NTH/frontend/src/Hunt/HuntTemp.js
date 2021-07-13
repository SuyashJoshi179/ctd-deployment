import "./Hunt.css";
import Login from "../Login/Login";
import { useEffect, useState,  useRef  } from "react";

const HuntTemp = () => {
  
  const eventDate = new Date('July 22, 2021 21:00:00').getTime();


  const [sec, setSec] = useState('');
  const [minutes, setMinutes] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');

  let interval = useRef
  
  
  const startTimer = () => {
    

    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = eventDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0){
        clearInterval(interval.current)
      }else{
        setDays(days);
        
        setHours(hours);
        setMinutes(minutes);
        setSec(seconds);
      }


    }, 1000)
  }


  useEffect(()=>{
    startTimer()
    return(()=>{
      clearInterval(interval.current)
    })
  }, [startTimer])

  return (
    <div>
      {eventDate - new Date().getTime() > 0 ? (
        <div className="huntTemp-page">
          <h2>Hunt will start after</h2>
          <h1 id="demo">{days}d {hours}h {minutes}m {sec}s</h1>
        </div>
      ) : (
        <div className="hunt-page">
          <Login />
        </div>
      )}
    </div>
  );
};

export default HuntTemp;


