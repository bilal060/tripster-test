import React from "react";
import { Button, Card } from "react-bootstrap";

const RoomCard = (props) => {
  const { imgUrl, name, area, poeple, bed, price } = props;
  return (
    <div className="room-card">
      <Card className="room-card-main">
        <div className="p-2 pb-0">
          <Card.Img variant="top" src={imgUrl} className="rounded-4 room-img" />
        </div>
        <Card.Body>
          <h5 className="card-heading mb-2">{name}</h5>
          <p className="fs-6 d-flex gap-2 align-items-center mb-1">
            <i className="fa fa-area-chart" aria-hidden="true"></i>
            {area}
          </p>
          <p className="fs-6 d-flex gap-2 align-items-center mb-1">
            <i className="fa fa-users" aria-hidden="true"></i>
            {poeple}
          </p>
          <p className="fs-6 d-flex gap-2 align-items-center mb-2">
            <i className="fa fa-bed" aria-hidden="true"></i>
            {bed}
          </p>
          <p className="text-grey">Breakfast Included</p>
          <Button
            variant="primary"
            className="px-4 header-btns rounded-5 w-100 mt-2 pt-1"
          >
            Book Now for {price}$
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomCard;
