import React, { useState, createContext, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

export const RecipeContext = createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.app.recipes'; 

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const [selectedRecipeid, setSelectedRecipeid] = useState()
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeid)
  
  // const [searchedQuery, setSearchedQuery] = useState('')
  // const filteredQuery = recipes.filter(recipe => recipe.name.toLowerCase().startsWith(searchedQuery.toLowerCase))

// console.log(searchedQuery);
  useEffect(() => {
    const  recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipesJSON !== null) {
      setRecipes(JSON.parse(recipesJSON))   
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  }, [recipes])

  function handleRecipeChanges(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id )
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleSelectedRecipe(id) {
    setSelectedRecipeid(id)
  }

  const contextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleSelectedRecipe,
    handleRecipeChanges}; 

  function handleRecipeAdd () {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: undefined,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name:"",
          amount: ""
        }
      ]
    } 
    handleSelectedRecipe(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete (id) {
    if (selectedRecipeid != null && selectedRecipeid === id) {
      setSelectedRecipeid(undefined)
    }
    setRecipes (recipes.filter(recipe => recipe.id !== id))
  }

  return (
  <RecipeContext.Provider value={contextValue}>  
    <RecipeList recipes = {recipes} 
    // searchedQuery={searchedQuery}
     /> 
    {selectedRecipe && <RecipeEdit recipe = {selectedRecipe} selectedRecipe ={selectedRecipe}/>}
  </RecipeContext.Provider>
  
  )
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
