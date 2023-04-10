import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd () {
    const newRecipe = {
      id: uuidv4(),
      name: "Name",
      servings: 1,
      cookTime: "1:00",
      instructions: "instru.",
      ingredients: [
        {
          id: uuidv4(),
          name:"ingre",
          amount: "1 Tb"
        }
      ]
    } 

    setRecipes([...recipes, newRecipe])
    
  }

  function handleRecipeDelete (id) {
    setRecipes (recipes.filter(recipe => recipe.id !== id))
  }
  return ( <RecipeList 
    recipes = {recipes}
    handleRecipeAdd = {handleRecipeAdd}
    handleRecipeDelete = {handleRecipeDelete}
  />)
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
