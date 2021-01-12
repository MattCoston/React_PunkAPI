import React, { Component } from 'react';

class Beer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.tagline}</h3>
                <h6>{this.props.brewers_tips}</h6>
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Beer;
