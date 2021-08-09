import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import axios from "axios";
import Cookies from 'js-cookie'
 

function LoginScreen({history}) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [query, setQuery] = useState("");
  var [dataToken,setDataToken] = useState("");

  useEffect(() => {
    if (Cookies.get('token')=='undefined') {
      history.push("/login");
    } 
    else if (Cookies.get('token')) {
      history.push("/dashboard");
    };
  }, [Cookies.get('token')]);
  useEffect(async ()=>{
    const login = async (email, password) =>  {
      var responseData  = await axios.post("/api/users/login",
      { email, password },
      { headers: {"Content-Type": "application/json"},
      });
      var data = responseData.data;
      var y2 = data.token;
      return data.token;
    };
    dataToken = await login(email, password);
    setDataToken(dataToken);
    Cookies.set('token', dataToken);
    history.push("/dashboard");
  },[query,dataToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setQuery([email,password,dataToken]);
   };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default LoginScreen;
