import "./Leaderboard.css";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../axios";
import {useEffect, useState} from "react";
import medal from "./rank-medal.jpg";
import Player from './Player'

const Leaderboard = () => {
  const [leaderboard,setleaderBoard] = useState([
    {
      "username": "admin",
      "level": 3,
    },
    {
      "username": "suyash",
      "level": 3,
    },

  ]);
  useEffect(()=>{
    axiosInstance.get().then((res)=>{
      setleaderBoard(res.data.result_data);
      console.log(res.data.result_data);
    });
  },
  [setleaderBoard]);
  const [first, ...newlist] = leaderboard;
  let counter = 1;
  return (
    <div className="leaderboard">
      <Container className="top">
        <Row>
          <Col lg={2} sm={2}>
            <h2>1</h2>
          </Col>
          <Col lg={6} sm={6}>
            <h2>{leaderboard[0].username}</h2>
            <h3>Level {leaderboard[0].level}</h3>
          </Col>
          <Col lg={4} sm={4}>
            {/* <img src={medal} width='100px' /> */}
          </Col>
        </Row>
      </Container>

      <Container className="other-players">
        <Row>
          <Col sm={2}>
            <h3>Pos</h3>
          </Col>
          <Col sm={6}>
            <h3>Player</h3>
          </Col>
          <Col sm={4}>
            <h3>Level</h3>
          </Col>
        </Row>        

        {
          newlist.map((user) =>{
            counter=counter+1;
            return (<Player position={counter} player={user.username} level={user.level}></Player>)
          })
        }
      </Container>
    </div>
  );
};

export default Leaderboard;
