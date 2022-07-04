import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import './ContactStyle.css';

function Contact() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Contact us</h1>
                <Row style={{ justifyContent: "space-evenly", marginTop: "50px" }}>
                    <Col md={5} className="contact-col">
                        <Card className="contact-card-view">
                            <Card.Header className="contact-card-header">Contact us</Card.Header>
                            <Card.Body>
                                <Card.Text className="contact-card-text">Do you have any comments and suggestions for our website? We sincerely hope to hear from you and will do everything we can to do our best!
                                    <br /><br /><b><BiMap />    Address</b>
                                    <br />Federation University Australia, Ballarat, Australia
                                    <br /><br /><b><BiPhoneCall />    Call us</b>
                                    <br />telephone: 12345678
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} className="contact-col">
                        <Card className="contact-card-view">
                            <Card.Header className="contact-card-header">Reach out to us</Card.Header>
                            <Card.Body>
                                <Form  style={{ paddingTop: "10px" }}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formName">
                                            <Form.Control type="name" placeholder="Full name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formEmail">
                                            <Form.Control type="email" placeholder="Email address" />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formTopic">
                                        <Form.Control placeholder="Topic" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formComment">
                                        <Form.Control as="textarea" placeholder="Comment" rows={4} />
                                    </Form.Group><div style={{ textAlign: "right", marginTop: "10px" }}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
        </Container>
    );
}

export default Contact;