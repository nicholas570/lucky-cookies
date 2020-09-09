import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Where from '../../components/home/FindUs_Where';
import Partners from '../../components/home/FindUs_Partners';
import PartnersMap from '../../components/home/FindUs_PartnersMap';

function FindUs(props) {
  const { content, partners } = props;
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md="8">
          <PartnersMap />
        </Col>
        <Col sm="12" md="4">
          <Where content={content} />
          <Partners partners={partners} />
        </Col>
      </Row>
    </Container>
  );
}

FindUs.propTypes = {
  content: PropTypes.shape.isRequired,
  partners: PropTypes.shape.isRequired,
};

export default FindUs;
