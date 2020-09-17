import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

function Job(props) {
  const { job } = props;
  return (
    <Col className="col-md-6 offset-md-3 mb-5 text-left">
      <p className="text-danger font-weight-bold mb-3">{job.title}</p>
      <p className="mb-3">{job.description}</p>
      <p>{job.experience}</p>
      <p>{job.starting}</p>
      <p>{job.hours}</p>
      <p>
        {`Candidature par mail à
        ${job.mail}`}
      </p>
    </Col>
  );
}

Job.propTypes = {
  job: PropTypes.shape.isRequired,
};

export default Job;
