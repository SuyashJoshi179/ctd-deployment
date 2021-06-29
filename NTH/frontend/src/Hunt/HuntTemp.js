import "./Hunt.css";
import Login from "../Login/Login";

const HuntTemp = () => {
  var countDownDate = new Date("June 9, 2021 13:24:00").getTime();

  var x = setInterval(() => {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    if (distance < 0) {
      return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  return (
    <div>
      {countDownDate - new Date().getTime() > 0 ? (
        <div className="huntTemp-page">
          <h2>Hunt will start after</h2>
          <h1 id="demo"></h1>
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
