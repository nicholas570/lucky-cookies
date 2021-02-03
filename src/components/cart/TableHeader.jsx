import React from 'react';

import { Col } from 'react-bootstrap/';

function TableHeader() {
  return (
    <>
      <Col className="col-6 text-left">
        <th className="border-top-0 text-muted">ITEM</th>
      </Col>
      <Col className="col-3 text-left">
        <th className="border-top-0 text-muted">QTY</th>
      </Col>
      <Col className="col-3 d-flex justify-content-end">
        <th className="border-top-0 text-muted">PRICE</th>
      </Col>
    </>
  );
}

export default TableHeader;
