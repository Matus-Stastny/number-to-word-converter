import React, { Component } from 'react';
import _ from 'lodash';

import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [],
            inputValue: ''
        };
    }

    handleSubmit = () => {
        this.callApi()
            .then(res => this.setState({ response: res.words }))
            .catch(err => console.log(err));
    };

    callApi = async () => {
        const response = await fetch(`/api/${this.state.inputValue}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleKeyboardButtonClick = value => {
        this.setState({ inputValue: `${this.state.inputValue}${value}` });
    };

    render() {
        const { inputValue, response } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <input className="number-input" value={inputValue} onChange={this.handleInputChange} />
                <button className="submit-button" onClick={this.handleSubmit}>
                    Submit
                </button>
                <div className="words-wrapper">
                    {response.map((word, index) => (
                        <span className={`word ${word.isRealWord ? 'word--is-real' : ''}`} key={index}>
                            {word.text}
                        </span>
                    ))}
                </div>
                <Keyboard onButtonPress={this.handleKeyboardButtonClick} />
            </div>
        );
    }
}

export default App;
