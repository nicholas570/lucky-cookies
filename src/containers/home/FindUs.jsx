import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Where from '../../components/home/FindUs_Where';
import Partners from '../../components/home/FindUs_Partners';
import PartnersMap from '../../components/home/FindUs_PartnersMap';

function FindUs({ content, partners }) {
  return (
    <Container className="mt-5 pb-5">
      <Row className="mb-5">
        <Col className="col-sm-12 col-md-3 offset-md-8">
          <p className="text-left font-weight-bold">Where to find us?</p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="7">
          <PartnersMap />
        </Col>
        <Col sm="12" md="5" className="mt-5 mt-md-0">
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
