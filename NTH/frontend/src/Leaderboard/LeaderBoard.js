import "./Leaderboard.css";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../axios";
import { useEffect, useState } from "react";
import trophy from "./trophy.jpeg";
import Player from "./Player";

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
  ]);
  useEffect(() => {
    axiosInstance.get().then((res) => {
      setleaderBoard(res.data.result_data);
      console.log(res.data.result_data);
    });
  }, [setleaderBoard]);
  // let [first, second, third,...newlist] = leaderboard;
  let newlist = leaderboard;
  let counter = 0;
  return (
    <div className="leaderboard">
      <Container className="other-players">
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
