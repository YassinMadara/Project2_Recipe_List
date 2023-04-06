import React from 'react'
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const {
    name, 
    cookTime, 
    servings, 
    instructions, 
    ingredients
    } = props 
  
    return (
    <div>
        <div>
            <h3>{name}</h3>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        <div>
            <span>Cook Time: </span>
            <span>{cookTime}</span>
        </div>
        <div>
            <span>Servings: </span>
            <span>{servings}</span>
        </div>
        <div>
            <span>Instructinos: </span>
            <span>{instructions}</span>
        </div>
        <div>
            <span>Ingredient: </span>
            <div>
                <IngredientList ingredients={ingredients} />
            </div>
        </div>
    </div>
  )
}
