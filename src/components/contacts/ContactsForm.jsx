import React, { useState } from 'react';
import axios from 'axios';

import { Col, Form, Button } from 'react-bootstrap';

function ContactsForm() {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      axios
        .post('http://localhost:4000/contacts', { ...state })
        .then((res) => {
          setResult(res.data);
          setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
        })
        .catch(() => {
          setResult({ success: false, message: 'Something went wrong' });
        });
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      {result && <p>{result.message}</p>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={state.firstName}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              value={state.subject}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid subject.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="message">
            <Form.Label>message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Message"
              name="message"
              value={state.message}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid message.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button
          type="submit"
          variant="light"
          className="font-weight-bold btn btn-outline-dark"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactsForm;
