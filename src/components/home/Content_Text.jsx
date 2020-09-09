import React from 'react';
import PropTypes from 'prop-types';

function TextContent(props) {
  const { content } = props;

  return (
    <div>
      <p className="text-left">{content.what}</p>
      <br />
      <hr />
      <br />
      <p className="text-left font-italic">{content.whatFrench}</p>
    </div>
  );
}

TextContent.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default TextContent;
