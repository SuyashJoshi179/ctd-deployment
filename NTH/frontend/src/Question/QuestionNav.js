import {Navbar, Button} from 'react-bootstrap'
import CTDlogo from './ctd.png'
import './Question.css'
import  Logout from '../logout/logout'

const QuestionNav = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Brand href="/">
          <img src={CTDlogo} width='130px'/>
      </Navbar.Brand>
      <Button><Logout /></Button>
    </Navbar>
  );
};

export default QuestionNav;