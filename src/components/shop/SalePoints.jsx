import React from 'react';
import { useSelector } from 'react-redux';

function SalePoints() {
  const { shop } = useSelector((state) => state.infos.data);
  return (
    <>
      <p className="text-left font-weight-bold text-danger mb-3">
        Points de vente
      </p>
      <p className="text-left mb-3">{shop.partnersText}</p>
      <p className="text-left">
        Vous pouvez consulter
        {'  '}
        <a href={shop.partnersMap} target="_blank" rel="noopener noreferrer">
          la carte des Amis de Lucky Cookies ici.
        </a>
      </p>
    </>
  );
}

export default SalePoints;
