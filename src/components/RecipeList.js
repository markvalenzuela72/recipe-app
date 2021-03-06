import React, { Component } from 'react'
import Recipe from './Recipe';

export default class RecipeList extends Component {
    
    render() {
        const {recipes} = this.props;
   
        return (
            <>
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-upper-case mb-3">
                        <h1 className="text-slanted">Recipe List</h1>
                    </div>
                </div>
                {/* end of title */}
                <div className="row">
                    {recipes && recipes.map(recipe => (<Recipe key={recipe.id} recipe={recipe}></Recipe>) )}
                    {/* {console.log(recipes)} */}
                </div>
            </div>
            </> 
        )
    }
}
