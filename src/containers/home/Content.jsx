import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Slogan from '../../components/home/Content_Slogan';
import TextContent from '../../components/home/Content_Text';

function Content() {
  return (
    <Container className="p-5">
      <Row className="d-flex flex-column flex-md-row">
        <Col className="col-sm-12 col-md-3">
          <Slogan />
        </Col>
        <Col className="col-sm-12 col-md-5 offset-md-2 mt-5">
          <TextContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
