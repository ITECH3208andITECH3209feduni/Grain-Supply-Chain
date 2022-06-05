import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function GenerateReport() {
    return (
        <Container fluid className="page-main-section">
            <Container>
                <h1 className="page-heading-text" style={{ marginTop: "80px" }}>Generate Report</h1>
                <Card style={{ justifyContent: "space-evenly", marginTop: "50px", borderRadius: "6px" }}>
                    <Card.Body>
                        <Form style={{ paddingTop: "10px" }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Control type="name" placeholder="Full name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Control type="email" placeholder="Email address" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formField1">
                                <Form.Control placeholder="Field 1" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formField2">
                                <Form.Control placeholder="Field 2" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formField3">
                                <Form.Control placeholder="Field 3" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formField4">
                                <Form.Control placeholder="Field 4" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formField5">
                                <Form.Control placeholder="Field 5" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formField6">
                                <Form.Control placeholder="Field 6" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDetails">
                                <Form.Control as="textarea" placeholder="Details" rows={4} />
                            </Form.Group><div style={{ textAlign: "right", marginTop: "10px" }}>
                                <Button variant="primary" type="submit">
                                    Generate Report
                                </Button></div>
                        </Form>
                    </Card.Body>
                </Card>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
        </Container>
    );
}

export default GenerateReport;