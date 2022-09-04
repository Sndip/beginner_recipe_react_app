import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" className={style.image} />
            <ol className={style.listing}>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3 className={style.calories}>Calories: {Math.round(parseInt(calories))}</h3>
        </div>
    )
}

export default Recipe;