import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipe extends Component {

    render() {
        const { id, image, title, sourceUrl, servings } = this.props.recipe;
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{ height: "100%" }}>
                    <img src={`https://spoonacular.com/recipeImages/${image}`} style={{ height: "14rem" }} className="img-card-top" alt="recipe" />
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">Serving: {servings}</h6>
                    </div>
                    <div className="card-footer">
                        <Link className="btn btn-primary text-capitalize" to={`/recipes/${id}`} >Details</Link>
                        <a className="btn btn-success mx-2 text-capitalize" href={sourceUrl} target="_blank" rel="noopener noreferrer">
                            Recipe URL
                        </a>  
                    </div>
                </div>
            </div>
        )
    }
}
