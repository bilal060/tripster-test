import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RoomCard from "../RoomCard";

const rooms = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Double standard roome",
    area: "18",
    poeple: "2",
    bed: "1 queen bed or 2 simple bed",
    price: "180",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg",
    name: "Double standard roome",
    area: "18",
    poeple: "2",
    bed: "1 queen bed or 2 simple bed",
    price: "200",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Double standard roome",
    area: "18",
    poeple: "2",
    bed: "1 queen bed or 2 simple bed",
    price: "280",
  },
  {
    imgUrl:
      "https://www.thespruce.com/thmb/Hkf6VOp0pkWQC2W4s5X4lnG_yJc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/interesting-white-bedroom-ideas-5200733-hero-c311e259f2e44a2280efb5dac2cd0b8d.jpg",
    name: "Double standard roome",
    area: "18",
    poeple: "2",
    bed: "1 queen bed or 2 simple bed",
    price: "250",
  },
];
const Rooms = () => {
  return (
    <>
      <div className="bg-light rooms pt-5 pb-4">
        <Container>
          <h3 className="fw-bold mb-3">Rooms</h3>
          <Row>
            {rooms.map((data, index) => {
              return (
                <Col xl={3} lg={4} md={6} key={index} className="mb-4">
                  <RoomCard
                    imgUrl={data.imgUrl}
                    name={data.name}
                    area={data.area}
                    poeple={data.poeple}
                    bed={data.bed}
                    price={data.price}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Rooms;
