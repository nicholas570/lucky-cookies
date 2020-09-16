import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Job from '../../components/careers/Job';

function Jobs(props) {
  const { jobs } = props;

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
        <Col className="mb-5">
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </Col>
      </Row>
    </Container>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.shape.isRequired,
};

export default Jobs;
