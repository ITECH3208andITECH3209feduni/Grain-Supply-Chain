import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function HomeCard(props) {
  return (
    <Card className="home-card-view">
      <Card.Img className="home-card-img-top" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="home-card-title">{props.title}</Card.Title>
        <Card.Text className="home-card-text" style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <Nav.Link as={Link} to={props.link}><Button variant="primary">View More</Button> </Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
