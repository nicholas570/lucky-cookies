import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  const { main, address } = props;

  return (
    <Container>
      <Row>
        <Col>
          <p className="text-left">Photo credits (c) Pixabay</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs="6" md="4" lg="2" className="p-3">
          <Image src={`/assets/images/logo/${main.logo}`} rounded alt="logo" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col>
          <p className="font-weight-bold text-muted">
            &#169; 2020
            {'   '}
            {main.brand}
            {'   '}
            (SAS)
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col>
          <p className="text-muted">{address.street}</p>
          <p className="text-muted">{`${address.zip} ${address.city}`}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col>
          <Button variant="light" className="btn btn-outline-dark">
            CONTACT
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" lg="3">
          <Nav navbar className="d-flex flex-row justify-content-around">
            <NavItem>
              <NavLink className="text-dark font-weight-bold" href="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark font-weight-bold" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="text-dark font-weight-bold"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="text-dark font-weight-bold"
                href="https://www.instagram.com/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

Footer.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
};

export default Footer;
