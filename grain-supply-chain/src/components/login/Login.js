import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

function Login(props) {

    const handleClose = () => props.onLoginModalStateChanged(false);

    return (
        <>
            <Modal show={props.loginModalState} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="loginForm.mobileNumber">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control type="number" placeholder="1234567890" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="loginForm.uniqueCode" >
                            <Form.Label>Unique code</Form.Label>
                            <Form.Control type="text" placeholder="----" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
