import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const progress = [
  {
    name: "Cleanliness",
    rating: 10,
  },
  {
    name: "Amenities",
    rating: 7,
  },
  {
    name: "Location",
    rating: 9,
  },
  {
    name: "Cleanliness",
    rating: 10,
  },
  {
    name: "Amenities",
    rating: 7,
  },
];
const review = [
  {
    name: "Mark",
    comments: "Excellent value for the price",
    descriptions:
      "We enjoyed our stay at this hotel. We will definitely come back",
    service: [
      {
        detail: "Decent Location",
      },
      {
        detail: "Service",
      },
      {
        detail: "Bottle of champagne at room",
      },
    ],
  },
  {
    name: "Jonas",
    comments: "Excellent value for the price",
    descriptions:
      "We enjoyed our stay at this hotel. We will definitely come back",
    service: [
      {
        detail: "Decent Location",
      },
      {
        detail: "Service",
      },
      {
        detail: "Bottle of champagne at room",
      },
    ],
  },
];
const Review = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <div className="review py-5">
        <Container>
          <h3 className="fw-bold mb-4">Reviews</h3>
          <Row>
            <Col xl={4} lg={5} md={6} className="mb-4">
              <h1 className="mb-3 text-primary">9.6/10</h1>
              {progress.map((data, index) => {
                return (
                  <div className="mb-4" key={index}>
                    <div className="d-flex mb-1 align-items-center justify-content-between">
                      <p>{data.name}</p>
                      <span className="text-grey">{data.rating}/10</span>
                    </div>
                    <ProgressBar now={60} className="progress" />
                  </div>
                );
              })}
            </Col>
            <Col xl={8} lg={7} md={6} className="mb-4">
              <div className="review-main ps-md-4">
                {review.map((data, index) => {
                  return (
                    <div key={index} className="review-sub">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <p className="fs-5 mb-1 fw-semibold">
                            {data.comments}
                          </p>
                          <p className="text-grey mb-1 font-14">{data.name}</p>
                          <p className="fw-medium mb-2">{data.descriptions}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <h2 className="fw-bold fs-5 text-success">
                            Excellent
                          </h2>
                          <p className="rating fw-bold text-success">ID</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between">
                        <ul>
                          {data.service.map((services, index) => {
                            return (
                              <li key={index} className="font-14">
                                {services.detail}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="mb-3 font-14 text-grey">
                          <p>Published on</p>
                          <p>{currentDate}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Review;
