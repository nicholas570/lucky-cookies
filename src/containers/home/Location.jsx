import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Content from '../../components/home/Location_Content';
import Info from '../../components/home/Location_Info';

function Location(props) {
  const { content, address, contacts, openings } = props;

  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col sm="12" md="3">
          <Info address={address} contacts={contacts} openings={openings} />
        </Col>
        <Col md="3" />
        <Col sm="12" md="6">
          <Content content={content} />
        </Col>
      </Row>
    </Container>
  );
}

Location.propTypes = {
  content: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
  openings: PropTypes.shape.isRequired,
};

export default Location;
