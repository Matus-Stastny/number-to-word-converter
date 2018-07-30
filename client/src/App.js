import React, { Component } from 'react';
import cx from 'classnames';

import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            inputValue: '',
            showedRealWordsOnly: false
        };
    }

    handleSubmit = () => {
        this.callApi()
            .then(res => this.setState({ words: res.words }))
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

    handleClear = () => {
        this.setState({ words: [], inputValue: '' });
    };

    handleRealWordsFilter = () => {
        this.setState({ showedRealWordsOnly: !this.state.showedRealWordsOnly });
    };

    handleDelete = () => {
        this.setState({ inputValue: this.state.inputValue.slice(0, -1) });
    };

    render() {
        const { inputValue, words, showedRealWordsOnly } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Number to word converter</h1>
                </header>

                <div className="container">
                    {words.length > 0 && (
                        <div className="options-panel">
                            <button className="button clear-button" onClick={this.handleClear}>
                                Clear
                            </button>
                            <label className="options-panel__item">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    value={showedRealWordsOnly}
                                    onChange={this.handleRealWordsFilter}
                                />
                                Only real words
                            </label>
                        </div>
                    )}
                    <div className="wrapper words-wrapper">
                        {words.map((word, index) => (
                            <span
                                className={cx('word', {
                                    'word--real': word.isRealWord,
                                    'word--hidden': !word.isRealWord && showedRealWordsOnly
                                })}
                                key={index}
                            >
                                {word.text}
                            </span>
                        ))}
                    </div>
                    <div className="wrapper">
                        <input
                            type="number"
                            s
                            className="number-input"
                            value={inputValue}
                            onChange={this.handleInputChange}
                        />
                        <Keyboard
                            onSubmit={this.handleSubmit}
                            onDelete={this.handleDelete}
                            onButtonPress={this.handleKeyboardButtonClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
