import React from 'react';
import PropTypes from 'prop-types';

function ProductIngredients({ ingredients }) {
  return (
    <>
      {ingredients && (
        <div>
          <p className="font-weight-bold">Ingredients</p>
          <div className="text-left mb-3">
            {ingredients.map((ingredient) => {
              return <p key={ingredient.id}>{ingredient}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

ProductIngredients.propTypes = {
  ingredients: PropTypes.shape.isRequired,
};

export default ProductIngredients;
