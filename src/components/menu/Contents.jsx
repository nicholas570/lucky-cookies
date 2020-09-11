import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

function Contents(props) {
  const { menu, snacks, mainCourses } = props;
  return (
    <Container className="text-left border border-primary ">
      <Row className="mb-5">
        <Col>
          <h4 className="text-center">
            <u>{`Déjeuner du ${menu.from} au ${menu.to} ${menu.month}`}</u>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Formule prix formule 1</p>
          <p>Snack + dessert + thé,café ou Perrier</p>
          <p className="font-weight-bold">Formule prix formule 2</p>
          <p>Plat du jour + dessert + boisson</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Snacks</p>
          {snacks.map((snack) => {
            return (
              <p key={snack.id}>
                {snack.name}
                {'  '}
                <strong>{snack.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Plats du jour</p>
          {mainCourses.map((main) => {
            return (
              <p key={main.id}>
                {main.name}
                {'  '}
                <strong>{main.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Desserts</p>
          <p>map sur les desserts</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Boissons</p>
          <p>map sur les boissons</p>
        </Col>
      </Row>
    </Container>
  );
}

Contents.propTypes = {
  menu: PropTypes.shape.isRequired,
  snacks: PropTypes.shape.isRequired,
  mainCourses: PropTypes.shape.isRequired,
};

export default Contents;
