import React from 'react';
import PropTypes from 'prop-types';

function ProductIngredients({ product }) {
  return (
    <>
      <p>Ingredients</p>
      <div className="text-left">
        {product.ingredients.map((ingredient) => {
          return <p>{ingredient}</p>;
        })}
      </div>
    </>
  );
}

ProductIngredients.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductIngredients;
