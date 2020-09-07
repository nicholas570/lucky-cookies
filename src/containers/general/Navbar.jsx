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

import style from '../../css/home/navbar.module.css';

function NavbarComponent(props) {
  const { main } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="d-flex justify-content-around my-5"
        color="light"
        light
        expand="md"
      >
        <NavbarToggler onClick={toggle} />
        <NavbarText className="text-dark d-none d-md-block">
          {main.motto}
        </NavbarText>
        <NavbarBrand href="/">
          <h4 className="font-weight-bold text-dark">{main.brand}</h4>
          <NavbarText className="text-dark">{main.description}</NavbarText>
        </NavbarBrand>
        <Collapse className={style.container} isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-dark" href="/components/">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
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
