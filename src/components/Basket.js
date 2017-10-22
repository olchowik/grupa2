import React from 'react';
import SelectedRecipe from './SelectedRecipe';

const IngredientsList = ({ match }) => {
  return (
    <div>
      Tutaj będzie IngredientsPrice
      <SelectedRecipe id={match.params.recipeId} />
    </div>
  );
};

IngredientsList.defaultProps = {};

export default IngredientsList;
