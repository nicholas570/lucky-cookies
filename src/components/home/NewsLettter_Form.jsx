import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Col, Row, Button } from 'react-bootstrap';

import { postNewsLetterForm } from '../../redux';

function NewsLetterForm() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.newsLetterForm);
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      dispatch(postNewsLetterForm(state));
      setState({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
    setValidated(true);
  };

  return (
    <div className="pt-5 p-md-5">
      <div className="mt-5">
        <h4 className="text-muted">Brewed and Baked daily</h4>
        <p className="text-muted">Subscribe to the newsletter</p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="d-flex flex-column flex-md-row p-5">
          <Col className="m-3">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={state.firstName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="m-3">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              value={state.lastName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="m-3">
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Button
          variant="warning"
          className="btn btn-outline-light"
          size="lg"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default NewsLetterForm;
