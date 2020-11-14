import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipe extends Component {

    render() {
        console.log(this.props.recipe)
        const { id, image, title, nutrition } = this.props.recipe;
        const carbsCount = nutrition.nutrients[0].amount;
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{ height: "100%" }}>
                    <img src={image} style={{ height: "14rem" }} className="img-card-top" alt="recipe" />
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">
                            Carbs Count: {carbsCount}</h6>
                    </div>
                    <div className="card-footer">
                        <Link className="btn btn-primary text-capitalize" to={`/recipes/${id}`} >Details</Link>  
                    </div>
                </div>
            </div>
        )
    }
}
