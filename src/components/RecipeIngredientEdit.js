import React from 'react'

export default function RecipeEditIngredient({ingredients, handleIngredientChanges, handelIngredientDelete}) {
  function handleChange(changes) {
    handleIngredientChanges(ingredients.id, {...ingredients, ...changes})    
  }
  return (
    <>
        <input className='recipe-edit__input' type='text' value={ingredients.name} onChange={e => handleChange({name: e.target.value})} />
        <input className='recipe-edit__input' type='text' value={ingredients.amount} onChange={e => handleChange({amount: e.target.value})}/>
        <button className='btn btn--danger' onClick={() => handelIngredientDelete(ingredients.id)}>&times;</button>
    </>
  )
}
