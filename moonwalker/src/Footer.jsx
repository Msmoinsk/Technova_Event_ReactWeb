import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TitleSpons } from "./components/TitleSpons";
import logo from "./assets/img/logo.svg";
import navIcon1 from "./assets/img/iconwhatsapp.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <TitleSpons />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100076290536284&mibextid=LQQJ4d"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/technova_slrtdc?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Shree LR.Tiwari College</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
