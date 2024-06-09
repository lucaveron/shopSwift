// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="w-100">
        <Col className="d-flex justify-content-center align-items-center" md={6}>
          <p>Politica de privacidad etc</p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center" md={6}>
        <p>Tecnologias y derechos</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
