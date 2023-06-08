/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tabs, Tab } from "react-bootstrap";
import room1 from "../../Assests/Images/image1.jpg";
import room2 from "../../Assests/Images/image2.jpg";
import room3 from "../../Assests/Images/image3.jpg";
import room4 from "../../Assests/Images/image4.jpg";
import room5 from "../../Assests/Images/image5.jpg";

const HeroImages = () => {
  const [key, setKey] = useState("overview");

  return (
    <Container className="pt-4 pb-5">
      <Row className="pb-4">
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="1.5rem"
            width="1.5rem"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img
            src={room1}
            alt="room-1-image"
            className="img-fluid rounded-4 h-100"
          />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Row>
            <Col sm={6} className="mb-4">
              <img
                src={room2}
                alt="room-2-image"
                className="img-fluid rounded-4 h-100"
              />
            </Col>
            <Col sm={6} className="mb-4">
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
                className="img-fluid rounded-4 h-100"
              />
            </Col>
            <Col sm={6} className="mt-4 mt-sm-0">
              <img
                src={room5}
                alt="room-5-image"
                className="img-fluid rounded-4 h-100"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="fw-bold fs-2 mt-4">Hotel Norrebro</h2>
          <p className="text-grey fs-6">
            3-start hotel located at heart of Copenhagen
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-center gap-3">
          <div>
            <h2 className="fw-bold fs-5 text-success">Excellent</h2>
            <p className="text-grey fs-6 text-grey">
              1920 <span className="font-14">reviews</span>
            </p>
          </div>
          <div className="rating text-success fw-bold">9.5</div>
        </Col>
      </Row>

      <div className="custom-main-content mt-2 pt-4">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 justify-content-center custom-pills"
        >
          <Tab eventKey="overview" title="Overview">
            <Row>
              <Col md={6} className="d-flex flex-column gap-3">
                <h3 className="fs-4 fw-bolder">Property Overview</h3>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-wifi"></i> Free Wifi
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-square-parking"></i> Free Parking
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-air-conditioner"></i> Air
                    conditioning
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-clock"></i> 24-hour from desk
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shower"></i> Private bathroom
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-key"></i> Key card access
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="rooms" title="Rooms">
            <Row>
              <Col md={6} className="d-flex flex-column gap-3">
                <h3 className="fs-4 fw-bolder">Rooms Overview</h3>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-wifi"></i> Free Wifi
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-square-parking"></i> Free Parking
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-air-conditioner"></i> Air
                    conditioning
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-clock"></i> 24-hour from desk
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shower"></i> Private bathroom
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-key"></i> Key card access
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="amenitie" title="Amenitie">
            <Row>
              <Col md={6} className="d-flex flex-column gap-3">
                <h3 className="fs-4 fw-bolder">Amenitie Overview</h3>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-wifi"></i> Free Wifi
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-square-parking"></i> Free Parking
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-air-conditioner"></i> Air
                    conditioning
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-clock"></i> 24-hour from desk
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shower"></i> Private bathroom
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-key"></i> Key card access
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="policies" title="Policies">
            <Row>
              <Col md={6} className="d-flex flex-column gap-3">
                <h3 className="fs-4 fw-bolder">Policies Overview</h3>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-wifi"></i> Free Wifi
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-square-parking"></i> Free Parking
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-air-conditioner"></i> Air
                    conditioning
                  </Col>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-clock"></i> 24-hour from desk
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shower"></i> Private bathroom
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-key"></i> Key card access
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default HeroImages;
