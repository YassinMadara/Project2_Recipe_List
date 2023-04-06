import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return ( <RecipeList recipes = {sampleRecipes}/>)
}

const sampleRecipes = [
  {
    id:1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pound" 
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs" 
      }
    ]
  },
  {
    id:2,
    name: 'Plain Meat',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put salt on Meat\n2. Put Meat in oven\n3. Eat Meat", 
    ingredients: [
      {
        id: 1,
        name: "Meat",
        amount: "3 Pound" 
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs" 
      }
    ]
  }
]

export default App;
