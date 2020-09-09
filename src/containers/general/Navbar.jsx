import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import style from '../../css/home/Navbar.module.css';

function NavbarComponent(props) {
  const { main } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="d-flex flex-row justify-content-around my-5"
        light
        expand="md"
      >
        <NavbarText className="text-dark d-none d-md-block">
          {main.motto}
        </NavbarText>
        <NavbarBrand href="/">
          <h5 className="font-weight-bold text-dark">{main.brand}</h5>
          <h6 className="text-dark">{main.description}</h6>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className={style.container} isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-dark" href="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

NavbarComponent.propTypes = {
  main: PropTypes.shape.isRequired,
};

export default NavbarComponent;
