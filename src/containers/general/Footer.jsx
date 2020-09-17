import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Modal from '../../components/contacts/Modal';

import style from '../../css/home/Footer.module.css';

function Footer(props) {
  const { main, address } = props;

  return (
    <Container fluid className="p-5" id={style.BgColor}>
      <Row className="justify-content-center mb-3">
        <Col xs="6" md="4" lg="2" className="p-3">
          <Image src={`/assets/images/logo/${main.logo}`} rounded alt="logo" />
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col>
          <p className="text-muted font-weight-bold">{`${main.brand} (SAS)`}</p>
          <p className="text-muted">{address.street}</p>
          <p className="text-muted">{`${address.zip} ${address.city}`}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col>
          <p className="font-weight-bold">
            &#169; 2020
            {'   '}
            Nicolas Mercier
          </p>
          <p className="font-weight-bold">
            Photo credits
            {'  '}
            (c) Pixabay
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col>
          <Modal />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" lg="3">
          <Nav navbar className="d-flex flex-row justify-content-around">
            <NavItem>
              <NavLink className="font-weight-bold nav-font-color" href="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="font-weight-bold nav-font-color"
                href="/careers"
              >
                Careers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-font-color"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-font-color"
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
