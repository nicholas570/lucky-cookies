import React from 'react';
import { useSelector } from 'react-redux';

function Slogan() {
  const content = useSelector((state) => state.data.main.content);
  return (
    <div>
      {content && (
        <>
          <h4 className="font-weight-bold">{content.slogan}</h4>
          <br />
          <br />
          <h4 className="font-weight-bold">{content.slogan2}</h4>
        </>
      )}
    </div>
  );
}

export default Slogan;
