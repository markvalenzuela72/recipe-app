import React, { Component } from 'react';

export default class Search extends Component {

    render() {
        const {handleChange, handleSUbmit, blue} = this.props; 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            Search Recipes with{" "}
                            <strong className="text-orange">Food2Fork</strong>
                        </h1>
                        <form className="mt-4">
                            <label htmlFor="search" className="text-capitalize">
                                type recipes seperated by comma
                            </label>
                            <div className="input-group">
                            <input type="text" name="search" className="form-control" placeholder="chicken, onion, carrots"
                            value={blue}
                            onChange={handleChange} />
                            <div className="input-group-append">
                                <button type="submit" className="input-group-text text-white bg-primary"
                                 onClick={handleSUbmit}>
                                    <i className="fas fa-search" />
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
