import React, { useState } from 'react';

import { Col, Form, Button } from 'react-bootstrap';

function ContactsForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid subject.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Message" required />
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
  );
}

export default ContactsForm;
