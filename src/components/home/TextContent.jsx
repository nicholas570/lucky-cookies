import React from 'react';
import PropTypes from 'prop-types';

function TextContent(props) {
  const { content } = props;

  return (
    <div className="container mt-md-5">
      <div className="row d-flex justify-content-center text-left">
        <div className="col-md-6 mt-5">
          <p>{content.what}</p>
        </div>
      </div>
    </div>
  );
}

TextContent.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default TextContent;
