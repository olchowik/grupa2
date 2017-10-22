import React from 'react';

import Basket from '../components/Basket';
import { Route } from 'react-router-dom';

const Content = props => {
  return (
    <div>
      Tutaj będzie RecipeList
      <Route path="/basket/:recipeId" component={Basket} />
    </div>
  );
};

export default Content;
