import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname == "/") return null;
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Sanyat Hoque</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
