import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [errorMsg, setErrorMsg] = useState('');
    const mobileNumberRef = useRef();
    const uniqueCodeRef = useRef();
    const navigate = useNavigate()

    const [state, setState] = useState({
        mobileNumber: '',
        uniqueCode: ''
    });

    useEffect(() => {
        resetStates();
    }, []);

    function resetStates() {
        setErrorMsg('');
        setState({ mobileNumber: '' });
        setState({ uniqueCode: '' });
    }

    const handleClose = () => {
        resetStates();
        props.onLoginModalStateChanged(false);
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function validateLogin() {
        const isInvalid = validateInput();
        if (!isInvalid) {
            resetStates();
            props.onLoginModalStateChanged(false);
            navigate("./generate-report", { replace: true });
        }
    }

    const validateInput = () => {
        const fields = [
            {
                name: 'mobileNumber',
                value: state.mobileNumber,
                message: 'Please enter a valid Mobile number.'
            },
            {
                name: 'uniqueCode',
                value: state.uniqueCode,
                message: 'Please enter a valid Unique code.'
            }
        ];
        const isNotFilled = fields.some(field => {
            if (field.value == null || field.value.trim === '') {
                console.log('Failed', field)
                setErrorMsg(field.message);
                field.name === 'mobileNumber'
                    ? mobileNumberRef.current.focus()
                    : uniqueCodeRef.current.focus();
                return true;
            } else {
                console.log('Success', field)
                if (field.name === 'uniqueCode') {
                    console.log('Check Unique code')
                    if (field.value === '1234')
                        return false
                    else {
                        setErrorMsg(field.message);
                        return true
                    }
                }
            }
            setErrorMsg('');
            return false;
        });
        return isNotFilled;
    };

    return (
        <>
            <Modal show={props.loginModalState} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMsg && <Alert variant="danger"> <p className="mb-0"> {errorMsg} </p></Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="mobileNumber">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control type="text"
                                name="mobileNumber"
                                ref={mobileNumberRef}
                                value={state.mobileNumber}
                                placeholder="Enter your mobile number"
                                autoComplete="off"
                                onChange={handleInputChange}
                                maxLength="10"
                                min='0' required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="uniqueCode" >
                            <Form.Label>Unique code</Form.Label>
                            <Form.Control type="text"
                                name="uniqueCode"
                                ref={uniqueCodeRef}
                                value={state.uniqueCode}
                                placeholder="Enter your unique code"
                                autoComplete="off"
                                onChange={handleInputChange}
                                maxLength="4"
                                required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={validateLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
