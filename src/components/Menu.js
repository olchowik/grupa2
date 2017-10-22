import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
const Content = props => {
  return (
    <Menu size="large" stackable>
      <Container>
        <Menu.Item header>WarsawJS - SmartCookbok</Menu.Item>
        <Menu.Item as={Link} to={'/lol'} name="features">
          Lista przepisów
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Content;
