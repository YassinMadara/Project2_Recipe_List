import React from 'react'

export default function RecipeSearch({setSearchedQuery,}) {
    return (
        <div className='recipe-search__container'>
            <label className='recipe-search__label'>Search</label>
            <input className='recipe-search__input' type='text'  id='Search'
            onChange={e => setSearchedQuery(e.target.value)} />
      </div>
    )
}