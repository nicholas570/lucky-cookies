import React from 'react';
import PropTypes from 'prop-types';

function Job(props) {
  const { job } = props;
  return (
    <>
      <h4>{job.title}</h4>
      <p>{job.starting}</p>
      <p>{job.description}</p>
    </>
  );
}

Job.propTypes = {
  job: PropTypes.shape.isRequired,
};

export default Job;
