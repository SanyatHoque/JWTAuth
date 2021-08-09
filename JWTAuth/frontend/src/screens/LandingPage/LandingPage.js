import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage({ history }) {
  let y1 = localStorage.getItem("token");
  useEffect(() => {
    console.log('y1',y1);
    if (localStorage.getItem("token")) {
      history.push("/mynotes");
    }
  }, [history, y1]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
