import React from 'react';
import { Input, Header } from 'semantic-ui-react';
const Home = props => {
  return (
    <div>
      <Header as="h3">Posiadane składniki: </Header>
      <Input icon="search" placeholder="Szukaj..." fluid />
      Tutaj będzie IngredientsList
    </div>
  );
};

export default Home;
