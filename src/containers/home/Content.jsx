import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Slogan from '../../components/home/Content_Slogan';
import TextContent from '../../components/home/Content_Text';

function Content({ content }) {
  return (
    <Container className="p-5">
      <Row className="d-flex flex-column flex-md-row">
        <Col className="col-sm-12 col-md-3">
          <Slogan content={content} />
        </Col>
        <Col className="col-sm-12 col-md-5 offset-md-2 mt-5">
          <TextContent content={content} />
        </Col>
      </Row>
    </Container>
  );
}

Content.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Content;
