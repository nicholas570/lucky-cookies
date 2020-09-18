import React from 'react';
import PropTypes from 'prop-types';

function Slogan({ content }) {
  return (
    <div>
      <h4 className="font-weight-bold">{content.slogan}</h4>
      <br />
      <br />
      <h4 className="font-weight-bold">{content.slogan2}</h4>
    </div>
  );
}

Slogan.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Slogan;
