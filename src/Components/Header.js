import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="app-header">
      <Container>
        <Row>
          <Col md={7}>
            <div className="d-flex align-items-center gap-4">
              <h3 className="fs-3 fw-bold">Tripster</h3>
              <div className="d-flex align-items-center gap-3">
                <h6 className="fs-6 text-gray">Properties</h6>
                <h6 className="fs-6 text-gray">Attractions</h6>
                <h6 className="fs-6 text-gray">Popular</h6>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="d-flex gap-3 align-items-center w-100 justify-content-end">
              <Button variant="outline-primary" className="px-4 header-btns rounded-5">
                Sign up
              </Button>
              <Button variant="primary" className="px-4 header-btns rounded-5">
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
