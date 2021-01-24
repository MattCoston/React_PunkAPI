import React, { Component } from 'react';
import './Beer.css';

class Beer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="beers">
                <div className="beer__style">
                    <h1>{this.props.name}</h1>
                    <img src={this.props.image} className="beer__image" />
                    <input className="checkbox" type="checkbox" value="liked" />
                    Add to favorites
                    <span className="beer__tagline">{this.props.tagline}</span>
                    <h5>{this.props.tips}</h5>
                </div>
            </div>
        );
    }
}

export default Beer;
