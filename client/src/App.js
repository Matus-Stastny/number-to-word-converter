import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        response: ''
    };
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
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
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.response}</p>
                <input value={inputValue} onChange={this.handleInputChange} />
                <Keyboard onButtonPress={this.handleKeyboardButtonClick} />
            </div>
        );
    }
}

export default App;
