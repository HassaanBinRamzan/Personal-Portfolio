import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hassaan-bin-ramzan-998627208">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/hassaanbinramzan?mibextid=ZbWKwL">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/HassaanBinRamzan">
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Created By Hassaan Bin Ramzan</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
