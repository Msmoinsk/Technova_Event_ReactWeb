import React from "react";
import { Col } from "react-bootstrap";
import img1 from "../assets/img/azaadme.png"
import img2 from "../assets/img/logospon.png"

export const TitleSpons = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <img className="sponsimg"src={img1} alt="" />
          <img className="sponsword"src={img2} alt="" />
        </div>
      </Col>
  )
}
