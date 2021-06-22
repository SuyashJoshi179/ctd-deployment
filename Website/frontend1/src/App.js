import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar/NavigationBar";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer/Footer";
import Webteam from "./pages/WebTeam/WebTeam";
import Events from "./pages/Events/Events";
import Home1 from "./pages/Home1";
import "./styles.css";
import RegisterLogin1 from "./components/RegisterLogin1";
import PublicRoute from "./components/utils/PublicRoute";
import "./assets/css/Home1.css";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/"  >
          <Home1></Home1>
        </PublicRoute>
        <PublicRoute exact path="/About" component={Home1} />
        <PublicRoute exact path="/login" component={RegisterLogin1} >
          <Navbar></Navbar>
          <RegisterLogin1></RegisterLogin1>
          <Footer></Footer>
        </PublicRoute>
        <PublicRoute path="/my-profile" >
          <Navbar></Navbar>
          <Profile></Profile>
          <Footer></Footer>
        </PublicRoute>
        <PublicRoute path="/ContactUs" >
          <Navbar></Navbar>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </PublicRoute>
        <PublicRoute path="/team" >
          <Navbar></Navbar>
          <Webteam></Webteam>
          <Footer></Footer>
        </PublicRoute>
        <PublicRoute path="/events" >
          <Navbar></Navbar>
          <Events></Events>
          <Footer></Footer>
        </PublicRoute>
      </Switch>
      
    </Router>
  );
}

export default App;
