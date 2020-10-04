import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

function Contents() {
  const { menu } = useSelector((state) => state.data);
  return (
    <Container className="text-left">
      <Row className="mb-3">
        <Col>
          <h4 className="text-center">
            <u>{`Déjeuner du ${menu.from} au ${menu.to} ${menu.month}`}</u>
          </h4>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="col-md-6 offset-md-3">
          <h4 className="text-center">{menu.text}</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 offset-md-1">
          <div className="mb-3">
            <p className="font-weight-bold">
              Formule
              {'  '}
              {menu.formule1}
            </p>
            <p>Snack + dessert + thé,café ou Perrier</p>
          </div>
          <div>
            <p className="font-weight-bold">
              Formule
              {'  '}
              {menu.formule2}
            </p>
            <p>Plat du jour + dessert + boisson</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Snacks</p>
          {menu.snacks.map((snack) => {
            return (
              <p key={snack.id}>
                {snack.name}
                {'  '}
                <strong className="ml-2">{snack.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Plats du jour</p>
          {menu.mainCourses.map((main) => {
            return (
              <p key={main.id}>
                {main.name}
                {'  '}
                <strong className="ml-2">{main.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Desserts</p>
          {menu.desserts.map((dessert) => {
            return (
              <p key={dessert.id}>
                {dessert.name}
                {'  '}
                <strong className="ml-2">{dessert.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-6 offset-md-1">
          <p className="font-weight-bold">Boissons</p>
          {menu.drinks.map((drink) => {
            return (
              <p key={drink.id}>
                {drink.name}
                {'  '}
                <strong className="ml-2">{drink.price}</strong>
              </p>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Contents;
