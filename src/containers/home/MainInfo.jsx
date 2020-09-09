import React from 'react';
import PropTypes from 'prop-types';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Offers from '../../components/home/MainInfo_Offers';
import Address from '../../components/home/MainInfo_Address';
import Contacts from '../../components/home/MainInfo_Contacts';

function MainInfo(props) {
  const { offers, address, contacts } = props;

  return (
    <Jumbotron fluid>
      <Container className="d-flex flex-column flex-md-row justify-content-around">
        <Address address={address} />
        <Offers offers={offers} />
        <Contacts contacts={contacts} />
      </Container>
    </Jumbotron>
  );
}

MainInfo.propTypes = {
  address: PropTypes.shape.isRequired,
  offers: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
};

export default MainInfo;
