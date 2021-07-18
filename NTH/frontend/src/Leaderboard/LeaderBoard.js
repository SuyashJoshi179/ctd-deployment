import "./Leaderboard.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import axiosInstance from "../axios";
import { useEffect, useState } from "react";
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
      username: "Karan",
      level: 5,
    },
    {
      username: "Atharva",
      level: 7,
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
      username: "Karan",
      level: 5,
    },
    {
      username: "Atharva",
      level: 7,
    },
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
    });
  }, [setleaderBoard]);
  let [first, second, third, ...newlist] = leaderboard;
  let counter = 3;
  return (
    <div className="leaderboard">
      <Container className="other-players">
        <Row>
          <Col className="mt-4">
            <Top
              position={2}
              player={second.username}
              level={second.level}
            ></Top>
          </Col>
          <Col>
            <Top position={1} player={first.username} level={first.level}></Top>
          </Col>
          <Col className="mt-5">
            <Top position={3} player={third.username} level={third.level}></Top>
          </Col>
        </Row>

        <Table className='leaderboard-table'>
          <thead>
            <tr>
              <th>Position</th>
              <th>Username</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {newlist.map((user) => {
              counter = counter + 1;
              return (
                <tr key={counter}
                  style={
                    (counter % 2 === 0 )?
                    ({
                      color:"rgb(10,10,10)", 
                      backgroundColor : "#E9B171",
                    }):({
                      color:"#E9B171", 
                      backgroundColor : "rgb(10,10,10)"
                    })
                  }
                >
                  <td>{counter}</td>
                  <td>{user.username}</td>
                  <td>{user.level}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Leaderboard;
