import React from "react";
import { Button, Card } from "react-bootstrap";

const RoomCard = (props) => {
  const { imgUrl, name, area, poeple, bed } = props;
  return (
    <div className="room-card">
      <Card className="rounded-4">
        <div className="p-2">
          <Card.Img variant="top" src={imgUrl} className="rounded-4 room-img" />
        </div>
        <Card.Body>
          <h5 className="card-heading">{name}</h5>
          <p>{area}</p>
          <p>{poeple}</p>
          <p>{bed}</p>
          <Button
            variant="primary"
            className="px-4 header-btns rounded-5 w-100 mt-3"
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomCard;
