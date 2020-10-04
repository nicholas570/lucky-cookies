import React from 'react';
import { useSelector } from 'react-redux';

function Partners() {
  const partners = useSelector((state) => state.data.main.partners);

  return (
    <div className="mb-5">
      {partners &&
        partners.map((partner) => {
          return (
            <a href={partner.mail} key={partner.id}>
              <p className="text-left font-italic">{partner.name}</p>
            </a>
          );
        })}
    </div>
  );
}

export default Partners;
