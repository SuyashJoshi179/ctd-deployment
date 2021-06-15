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
import LeaderBoard from './Leaderboard/LeaderBoard'
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute'; 

function App() {
  return (
    <div>
      <Router>
        <NavbarComp />
        <Switch>
          <PublicRoute exact path="/" exact component={Home} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/about" component={About} />
          <PublicRoute exact path="/team" component={Webteam} />
          <PublicRoute exact path="/contact" component={Contact} />
          <PublicRoute exact path="/hunt" component={HuntTemp} />
          <Route exact path="/question/:user_ans" component={Question} />
          <Route exact path="/question" component={Question2} />
          <PublicRoute exact path='/leaderboard' component = {LeaderBoard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
