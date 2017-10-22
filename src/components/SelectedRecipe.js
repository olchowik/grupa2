import React from 'react';
import { Item, Header, Segment } from 'semantic-ui-react';


const SelectedRecipe = ({ id }) => {
  return (
    <Segment basic vertical>
      <Header as="h3">Wybrany przepis:</Header>
      <Item.Group>
        Tutaj będzie RecipeItem
      </Item.Group>
    </Segment>
  );
};

export default SelectedRecipe;
