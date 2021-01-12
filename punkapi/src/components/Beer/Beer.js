import React, { Component } from 'react';
import './Beer.css';

class Beer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} className="beer__image" />
                <br></br>
                <span className="beer__tagline">{this.props.tagline}</span>
                <h6>{this.props.tips}</h6>
            </div>
        );
    }
}

export default Beer;
