import React, {useContext, useState} from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch';

import { RecipeContext } from './App';

export default function RecipeList({ recipes }) {
  const [searchedQuery, setSearchedQuery] = useState('')

  const { handleRecipeAdd } = useContext(RecipeContext)

  return (
    <div className='recipe-list'>
      <div>
      <RecipeSearch  setSearchedQuery = {setSearchedQuery}/>
      </div>
      <div>
        {recipes.filter(recipe => recipe.name.toLowerCase().includes(searchedQuery.toLowerCase())).map(recipe => {
          return (
              <Recipe key={recipe.id} {...recipe} />)
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button 
        className='btn btn--primary'
        onClick={handleRecipeAdd}
        >Add Recipe</button>
      </div>
    </div>
    )
}
