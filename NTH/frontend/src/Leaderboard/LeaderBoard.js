import "./Leaderboard.css";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../axios";
import { useEffect, useState } from "react";
import trophy from "./trophy.jpeg";
import Player from "./Player";
import Top from "./Top";

const Leaderboard = () => {
  const [leaderboard, setleaderBoard] = useState([
    {
      username: "admin",
      level: 3,
    },
    {
      username: "suyash",
      level: 3,
    },
    {
      username:'Karan',
      level:5
    },
    {
      username:'Atharva',
      level:7
    },
    {
      username: "admin",
      level: 3,
    },
    {
      username: "suyash",
      level: 3,
    },
    {
      username:'Karan',
      level:5
    },
    {
      username:'Atharva',
      level:7
    },
    {
      username: "admin",
      level: 3,
    },
    {
      username: "suyash",
      level: 3,
    }
  ]);
  useEffect(() => {
    axiosInstance.get().then((res) => {
      setleaderBoard(res.data.result_data);
    });
  }, [setleaderBoard]);
  let [first, second, third, ...newlist] = leaderboard;
  let counter = 3;
  return (
    <div className="leaderboard">
      
      <Container className="other-players">
        <Row>
          <Col className="mt-4" >
            <Top
              position={2}
              player={second.username}
              level={second.level}
            ></Top>
          </Col>
          <Col >
            <Top
              position={1}
              player={first.username}
              level={first.level}
            ></Top>
          </Col>
          <Col className="mt-5" >
            <Top
              position={3}
              player={third.username}
              level={third.level}
            ></Top>
          </Col>
        </Row>
        {newlist.map((user) => {
          counter = counter + 1;
          return (
            <Player
              position={counter}
              player={user.username}
              level={user.level}
            ></Player>
          );
        })}
      </Container>
      
    </div>
  );
};

export default Leaderboard;
