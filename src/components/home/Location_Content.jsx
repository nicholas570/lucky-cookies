import React from 'react';
import { useSelector } from 'react-redux';

function Content() {
  const content = useSelector((state) => state.data.main.content);

  return (
    <div>
      {content && (
        <>
          <p className="text-left">{content.location}</p>
          <br />
          <hr />
          <br />
          <p className="text-left font-italic">{content.locationFrench}</p>
          <br />
          <a href="https://www.google.com/maps/@47.2330812,-1.5506858,15z">
            <p className="font-italic text-dark text-left">Get directions</p>
          </a>
        </>
      )}
    </div>
  );
}

export default Content;
