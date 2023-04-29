import React from 'react'

export default function RecipeEditIngredient({ingredients}) {
  return (
    <>
        <input className='recipe-edit__input' type='text' value={ingredients.name}/>
        <input className='recipe-edit__input' type='text' value={ingredients.amount}/>
        <button className='btn btn--danger'>&times;</button>
    </>
  )
}
