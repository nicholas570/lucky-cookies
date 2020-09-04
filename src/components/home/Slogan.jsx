import React from 'react';
import PropTypes from 'prop-types';

function Slogan(props) {
  const { content } = props;

  return (
    <div>
      <h4>{content.slogan}</h4>
      <br />
      <h4>{content.slogan2}</h4>
    </div>
  );
}

Slogan.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Slogan;
