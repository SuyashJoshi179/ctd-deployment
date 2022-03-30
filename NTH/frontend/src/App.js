import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComp from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Webteam from "./WebTeam/WebTeam";
import Home from "./Home/Home";
import Register from "./Register/Register";
import About from "./About/About";
import Contact from "./Contact/Contact";
import HuntTemp from "./Hunt/HuntTemp";
import Question from "./Question/MainQuestion";
import Question2 from "./Question/MainQuestion2";
import LeaderBoard from "./Leaderboard/LeaderBoard";
import PublicRoute from "./utils/PublicRoute";
import ErrorPage from "./404page/ErrorPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const eventDate = new Date("April 9, 2022 21:00:00").getTime();
  return (
    <div>
      <Router>
        <NavbarComp eventDate={eventDate} />
        <Switch>
          <PublicRoute exact path="/" exact>
            <Home eventDate={eventDate}></Home>
          </PublicRoute>
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/about" component={About} />
          <PublicRoute exact path="/team" component={Webteam} />
          <PublicRoute exact path="/contact" component={Contact} />
          <PublicRoute exact path="/hunt">
            <HuntTemp eventDate={eventDate}></HuntTemp>
          </PublicRoute>
          <PrivateRoute exact path="/question/:user_ans" component={Question} />
          <PrivateRoute exact path="/question" component={Question2} />
          <PublicRoute exact path="/leaderboard" component={LeaderBoard} />
          <PublicRoute path='*' component={ErrorPage}></PublicRoute>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
