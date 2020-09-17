import React from 'react';

import { Form, Col, Row, Button } from 'react-bootstrap';

function NewsLetterForm() {
  return (
    <div className="pt-5 p-md-5">
      <div className="mt-5">
        <h4 className="text-muted">Brewed and Baked daily</h4>
        <p className="text-muted">Subscribe to the newsletter</p>
      </div>
      <Form>
        <Row className="d-flex flex-column flex-md-row p-5">
          <Col className="m-3">
            <Form.Control placeholder="First name" size="lg" />
          </Col>
          <Col className="m-3">
            <Form.Control placeholder="Last name" size="lg" />
          </Col>
          <Col className="m-3">
            <Form.Control placeholder="Email" size="lg" />
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
    </div>
  );
}

export default NewsLetterForm;
