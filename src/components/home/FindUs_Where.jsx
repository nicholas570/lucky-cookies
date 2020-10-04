import React from 'react';
import { useSelector } from 'react-redux';

function Where() {
  const content = useSelector((state) => state.data.main.content);

  return (
    <div className="text-left mb-5">
      {content && (
        <>
          <p>{content.where}</p>
          <br />
          <hr />
          <br />
          <p className="text-left font-italic">{content.whereFrench}</p>
          <br />
          <a href="https://www.facebook.com/" className=" font-italic">
            Facebook
          </a>
          {'  '}
          <a href="https://www.instagram.com/" className="font-italic ml-3">
            Instagram
          </a>
        </>
      )}
    </div>
  );
}

export default Where;
