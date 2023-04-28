import React from 'react'

export default function RecipeEditIngredient() {
  return (
    <>
        <input className='recipe-edit__input' type='text' />
        <input className='recipe-edit__input' type='text' />
        <button className='btn btn--danger'>&times;</button>
    </>
  )
}
