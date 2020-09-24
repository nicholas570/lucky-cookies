import React from 'react';
import PropTypes from 'prop-types';

function ProductIngredients({ product }) {
  const { ingredients } = product;
  return (
    <>
      {ingredients && (
        <>
          <p>Ingredients</p>
          <div className="text-left">
            {product.ingredients.map((ingredient) => {
              return <p key={ingredient.id}>{ingredient}</p>;
            })}
          </div>
        </>
      )}
    </>
  );
}

ProductIngredients.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductIngredients;
