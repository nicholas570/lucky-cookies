import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Contents from '../../components/menu/Contents';

function Lunch({ menu, snacks, mainCourses, desserts, drinks }) {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <Contents
            menu={menu}
            snacks={snacks}
            mainCourses={mainCourses}
            desserts={desserts}
            drinks={drinks}
          />
        </Col>
      </Row>
    </Container>
  );
}

Lunch.propTypes = {
  menu: PropTypes.shape.isRequired,
  snacks: PropTypes.shape.isRequired,
  mainCourses: PropTypes.shape.isRequired,
  desserts: PropTypes.shape.isRequired,
  drinks: PropTypes.shape.isRequired,
};

export default Lunch;
