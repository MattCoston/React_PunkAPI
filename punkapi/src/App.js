import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    render() {
        return <div className="App">TEST</div>;
    }
}

export default App;
