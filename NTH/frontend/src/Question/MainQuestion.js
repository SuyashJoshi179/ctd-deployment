import {useState,useEffect} from 'react'
import QuestionFooter from "./QuestionFooter";
import Logout from '../logout/logout';
import QuestionNav from "./QuestionNav";
import QuestionTemplate from "./Question";
import ContactModal from "./ContactModal";
import HintsModal from './HintsModal';
import UserProfileModal from './UserProfileModal';
import axiosInstance from '../axios';
import { useParams,useHistory } from 'react-router-dom';
import preloader from '../preloader.gif'

const Question = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);


  const {user_ans} = useParams();
  const [question, setQuestion] = useState({
    question: 'Question Loading .......',
    level: 0,
    image1: preloader,
    image2: preloader,
    image3: preloader,
    image4: preloader  
  })

  const [data, setData] = useState(0);
  useEffect(() => {
    axiosInstance.get('getUserInfo/').then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  },[setData])


  useEffect(() => {
    console.log('it is working bc')
    axiosInstance.get('questions/' + user_ans).then(res => {
      if (res.data.status === 'WA') {
        history.push('/')
      }
      console.log(res.data)
      setQuestion(res.data)
    })
  }, [setQuestion])
  return (
    <div className='question-page'>
      <QuestionNav></QuestionNav>
      <h1>Level {question.level}</h1>
      <h4>{question.question}</h4>
      <a href='/leaderboard'>
        <i class='fas fa-trophy fa-2x side-icons'></i>
      </a>
      <a onClick={() => setModalShow(true)} href="#">
        <i className="fas fa-address-card fa-2x side-icons"></i>
      </a>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
      <a onClick={() => setModalShow2(true)} href="#">
        <i className="fas fa-user-alt fa-2x side-icons">
        </i>
      </a>
      <UserProfileModal data={data} show={modalShow2} onHide={() => setModalShow2(false)} />
      
      <a onClick={() => setModalShow1(true)}  href="#">
        <i className="fal fa-lightbulb-on fa-2x side-icons"></i>
      </a>
      <HintsModal data={question} show={modalShow1} onHide={() => setModalShow1(false)} />
      <QuestionTemplate images={[question.image1,question.image2,question.image3,question.image4]}></QuestionTemplate>
      <QuestionFooter></QuestionFooter>
    </div>
  )
}

export default Question
