import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="app-header">
      <Container>
        <Row className="justify-content-between">
          <Col>
            <div className="d-flex align-items-center gap-4">
              <h3 className="fs-3 fw-bold">Tripster</h3>
              <div className="d-flex align-items-center gap-3">
                <h6 className="fs-6 text-gray">Properties</h6>
                <h6 className="fs-6 text-gray">Attractions</h6>
                <h6 className="fs-6 text-gray">Popular</h6>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-md-flex d-none gap-3 align-items-center w-100 justify-content-end">
              <Button
                variant="outline-primary"
                className="px-4 header-btns rounded-5"
              >
                Sign up
              </Button>
              <Button variant="primary" className="px-4 header-btns rounded-5">
                Login
              </Button>
            </div>
            <Dropdown
              className="d-md-none d-flex justify-content-end"
              align="end"
            >
              <Dropdown.Toggle
                id="dropdown-basic"
                className="fs-4 text-dark bg-transparent outline-0 border-0 p-0"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Sign up</Dropdown.Item>
                <Dropdown.Item href="#">Login</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
