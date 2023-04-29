import React, {useState} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({recipe}) {

  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button className='recipe-edit__remove-button' >&times;</button>
        </div>
        <div className='recipe-edit__details-grid' >
            <label className='recipe-edit__label' htmlFor='name'>Name</label>
            <input className='recipe-edit__input' type="text" name='name' id='name' value={recipe.name} />
            <label className='recipe-edit__label' htmlFor='cookTime'>Cook Time</label>
            <input className='recipe-edit__input' type="text" name='cookTime' id='cookTime' value={recipe.cookTime} />
            <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
            <input className='recipe-edit__input' type="number" min='1' name='servings' id='servings' value={recipe.servings}/>
            <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
            <textarea  className='recipe-edit__input' name='instructions' id='instructions' >
                {recipe.instructions}  
                 </textarea>
        </div>
        <br/>
        <label className='recipe-edit__label' >Ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div> </div>
            {recipe.ingredients.map(ingredients => <RecipeIngredientEdit key={ingredients.id} ingredients={ingredients} />)}
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary'>Add Ingredient</button>
        </div>
    </div>
  )
}
