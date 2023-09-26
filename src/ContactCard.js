import React,{ useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function ContactCard({ data }) {
  return (
    <Row>
      {data.map((i) => (

        <Link to={`ContactView/${i.id}`} style={{ textDecoration: 'none' }}>
          <Card className="ms-2 mt-4">
            <Card.Img
              className="p-1 border border"
              style={{ height: "300px",width: "100%" }}
              variant="top"
              src={i.profile}
            />
            <Card.Body>
              <Card.Title>{i.username}</Card.Title>
              <Card.Title>Name : {i.mobile}</Card.Title>
              <Card.Text>Address: {i.address}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Place : {i.place}</ListGroup.Item>
                <ListGroup.Item>Email : {i.email}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Link>
        </Col>
  ))
}
    </Row >
  );
}

export default ContactCard;
