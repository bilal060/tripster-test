/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import room1 from "../../Assests/Images/image1.jpg";
import room2 from "../../Assests/Images/image2.jpg";
import room3 from "../../Assests/Images/image3.jpg";
import room4 from "../../Assests/Images/image4.jpg";
import room5 from "../../Assests/Images/image5.jpg";

const HeroImages = () => {
  return (
    <Container>
      <Row>
        <Col>{/* <h1>arrow</h1> */}</Col>
      </Row>
      <Row>
        <Col md={6}>
          <img
            src={room1}
            alt="room-1-image"
            className="img-fluid rounded-4 h-100"
          />
        </Col>
        <Col md={6} className="mt-3 mt-md-0">
          <Row>
            <Col sm={6} className="mb-3">
              <img
                src={room2}
                alt="room-2-image"
                className="img-fluid rounded-4 h-100"
              />
            </Col>
            <Col sm={6} className="mb-3">
              <img
                src={room3}
                alt="room-3-image"
                className="img-fluid rounded-4 h-100"
              />
            </Col>
            <Col sm={6}>
              <img
                src={room4}
                alt="room-4-image"
                className="img-fluid rounded-0 h-100"
              />
            </Col>
            <Col sm={6}>
              <img
                src={room5}
                alt="room-5-image"
                className="img-fluid rounded-4 h-100"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroImages;
