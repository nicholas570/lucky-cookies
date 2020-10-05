import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import Job from '../../components/careers/Job';

function Jobs() {
  const { jobs } = useSelector((state) => state.data.careers);
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className="mb-5">
          <h4 className="font-weight-bold">Rejoignez nous</h4>
          <p>Nos jobs disponibes</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <hr />
        </Col>
      </Row>
      <Row>
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </Row>
    </Container>
  );
}

export default Jobs;
