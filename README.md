# warsawjs-workshop-11-smart-cookbook-description
This repository contains description and requirements for WarsawJS workshop 11 application. Because topic is `Advanced React.js`, we decided that we should choose interesting main theme, allowing us to use some sophisticated libraries and techniques. 

## Theme
As you probably already deduced from title, main theme is `Smart Cookbook`. We'll provide backend server with some recipes, and ability to query them and add our own. On the frontend side, during workshop we'll try to create application displaying recipes and filtering them based on ingredients. 


## User stories
As a user:
* I'm able to display list of all recipes
* I'm able to filter list of recipes specifying one or more ingredients
* I can view single recipe
* In a single recipe view, I can see dish picture, list of ingredients and detailed steps how to create it
* I can add new recipe
* I'm able to display list of all possible ingredients and filter it by name
* I can view single ingredient
* In a single ingredient view, I can see picture and short description, as well as list with all recipes using that ingredient
* I can add new ingredient

Optional:
* I can add / remove dish to/from cart
* I can see what ingredients I have to buy to cook dishes in a cart. Also, I can see their price.

## Models
**Recipe**:
- id
- name
- picture
- description
- cooking steps
- preparation time
- list of ingredients with quantities

**Ingredient**:
- id
- name
- description
- price (optional)


