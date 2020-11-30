import React from 'react';
import { useSelector } from 'react-redux';

function TextContent() {
  const content = useSelector((state) => state.infos.data.main.content);

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

export default TextContent;
