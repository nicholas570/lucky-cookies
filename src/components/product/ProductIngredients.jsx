import React from 'react';
import PropTypes from 'prop-types';

function ProductIngredients({ product }) {
  return (
    <>
      {product.ingredients && (
        <div>
          <p className="font-weight-bold">Ingredients</p>
          <div className="text-left mb-3">
            {product.ingredients.map((ingredient) => {
              return <p key={ingredient}>{ingredient}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

ProductIngredients.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductIngredients;
