import "./Question.css";
import Question1 from './Questions/Question1'
import Question2 from './Questions/Question2'
import Question3 from './Questions/Question3'
import IronMan from "./iron-man.jpg";
import Question4 from "./Questions/Question4";


const Question = (props) => {

  let images_num = 0;
  images_num = props.images[0] !==null?images_num+1:images_num;
  images_num = props.images[1] !==null?images_num+1:images_num;
  images_num = props.images[2] !==null?images_num+1:images_num;
  images_num = props.images[3] !==null?images_num+1:images_num;

  

  if(images_num === 1){
    return(
      <Question1 image={props.images[0]}></Question1>
    )
  }
  else if(images_num === 2){
    return(
      <Question2 image_1={props.images[0]} image_2={props.images[1]}  />
    )
  }
  else if(images_num === 3){
    return(
      <Question3 image_1={props.images[0]} image_2={props.images[1]} image_3={props.images[2]}  />
    )
  }
  else if(images_num === 4){
    return (
      <Question4 image_1={props.images[0]} image_2={props.images[1]} image_3={props.images[2]} image_4={props.images[3]} />
    )
  }
};

export default Question;
