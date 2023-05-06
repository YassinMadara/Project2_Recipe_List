import React from 'react'

export default function RecipeEditIngredient({ingredients, handleIngredientDelete, handleIngredientChanges}) {
  function handleChange(changes) {
    handleIngredientChanges(ingredients.id, {...ingredients, ...changes})    
  }
  return (
    <>
        <input className='recipe-edit__input' type='text' value={ingredients.name} onInput={e => handleChange({name: e.target.value})} />
        <input className='recipe-edit__input' type='text' value={ingredients.amount} onInput={e => handleChange({amount: e.target.value})}/>
        <button className='btn btn--danger' onClick={() => handleIngredientDelete(ingredients.id)}>&times;</button>
    </>
  )
}
