import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import {recipeData} from '../data/tempDetails';

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        const id = this.props.match.params.id;
        this.state = {
            // recipe: recipeData,
            recipe:{},
            id,
            loading: true
        }
    }
    async componentDidMount(){
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
        try{
            const response = await fetch(url);
            const responseData =await response.json();
            // console.log(responseData);
            this.setState({
                recipe: responseData,
                loading: false
            })
        }
        catch(error){
            console.log(error)
        }
    }
    render() {

        const { image, sourceName, sourceUrl, title, extendedIngredients, cuisines } = this.state.recipe;
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase text-orange text-center">LOADING RECIPE</h2>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link className="btn btn-warning mb-5 text-capitalize" to="/recipes">Back to Recipe List</Link>
                        <img src={image} className="d-block w-100" style={{ maxHeight: "30rem" }} alt="recipe" />
                    </div>
                    {/* info */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase ">{title}</h6>
                        <h6 className="text-warning text-capitalize text-slanted">Provided by {sourceName}</h6>
                        <div className="cusine">
                            {cuisines && cuisines.map((item, index) => {
                                return (
                                    <span class="badge badge-pill badge-warning mr-3" key={index}>{item}</span>
                                )
                            })}
                        </div>
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize" >
                            Recipe Url
                       </a>
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            {extendedIngredients && extendedIngredients.map((item, index) => {
                                return (
                                    <li key={index} className="list-group-item text-slanted">
                                        {item.originalName}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
