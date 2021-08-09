import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./RegisterScreen.css";
function RegisterScreen({ history }) {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [preferredname, setPreferredname] = useState("");
  const [status, setStatus] = useState("");
  const [room, setRoom] = useState("");
  const [levelofcare, setLevelofcare] = useState("");
  const [ambulation, setAmbulation] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [moveindate, setMoveindate] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      var responseData  = await fetch("/api/users/register",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, firstname, lastname, preferredname, status, room, levelofcare, ambulation, birthdate, moveindate, ID, author }),
      });
      history.push("/");
    }
  };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">

        <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="ID"
              value={ID}
              placeholder="ID"
              onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>


          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>firstname</Form.Label>
            <Form.Control
              type="firstname"
              value={firstname}
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>lastname</Form.Label>
            <Form.Control
              type="lastname"
              value={lastname}
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>preferredname</Form.Label>
            <Form.Control
              type="preferredname"
              value={preferredname}
              placeholder="preferredname"
              onChange={(e) => setPreferredname(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>status</Form.Label>
            <Form.Control
              type="status"
              value={status}
              placeholder="status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>room</Form.Label>
            <Form.Control
              type="room"
              value={room}
              placeholder="room"
              onChange={(e) => setRoom(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>levelofcare</Form.Label>
            <Form.Control
              type="levelofcare"
              value={levelofcare}
              placeholder="levelofcare"
              onChange={(e) => setLevelofcare(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>ambulation</Form.Label>
            <Form.Control
              type="ambulation"
              value={ambulation}
              placeholder="ambulation"
              onChange={(e) => setAmbulation(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>birthdate</Form.Label>
            <Form.Control
              type="birthdate"
              value={birthdate}
              placeholder="birthdate"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>moveindate</Form.Label>
            <Form.Control
              type="moveindate"
              value={moveindate}
              placeholder="moveindate"
              onChange={(e) => setMoveindate(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>author</Form.Label>
            <Form.Control
              type="author"
              value={author}
              placeholder="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default RegisterScreen;
