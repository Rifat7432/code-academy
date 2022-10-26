import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DetailsCard = ({course}) => {
    const {name,details,duration,img,price} = course
    return (
        <div className='w-75 mx-auto py-5'>
            <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Card.Text>
          Duration : {duration}
          </Card.Text>
          <Card.Text>
          Price : {price}
          </Card.Text>
          <Button variant="primary">Get premium access.</Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default DetailsCard;