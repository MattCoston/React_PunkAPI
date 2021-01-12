import React, { Component } from 'react';
import './App.css';
import Beer from './components/Beer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: null,
        };
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
            .then((res) => res.json())
            .then((data) => this.setState({ beers: data }));
    }
    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.beers &&
                        this.state.beers.map((beer) => {
                            console.log(beer);
                            return (
                                <Beer
                                    name={beer.name}
                                    tagline={beer.tagline}
                                    tips={beer.brewers_tips}
                                    image={beer.image_url}
                                />
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default App;
