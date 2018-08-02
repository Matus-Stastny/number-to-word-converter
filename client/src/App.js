// @flow
import React, { Component } from 'react';
import cx from 'classnames';

import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard';

type ResponseWord = {
    text: string,
    isRealWord: boolean
};

type Props = {};

type State = {
    words: Array<ResponseWord>,
    inputValue: string,
    showedRealWordsOnly: boolean,
    isLoading: boolean,
    isSubmitButtonDisabled: boolean,
    error: string
};

class App extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            words: [],
            inputValue: '',
            showedRealWordsOnly: false,
            isLoading: false,
            isSubmitButtonDisabled: false,
            error: ''
        };
    }

    handleSubmit = () => {
        this.setState({ isLoading: true, isSubmitButtonDisabled: true });
        this.callApi()
            .then((res: { words: Array<ResponseWord> }): void =>
                this.setState({ words: res.words, isLoading: false, isSubmitButtonDisabled: false })
            )
            .catch((err: { message: string }): void =>
                this.setState({ error: err.message, isLoading: false, isSubmitButtonDisabled: false })
            );
    };

    callApi = async (): Promise<{ words: Array<ResponseWord> }> => {
        const response = await fetch(`/api/${this.state.inputValue}`);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value, error: '' });
    };

    handleKeyboardButtonClick = (value: string) => {
        this.setState({ inputValue: `${this.state.inputValue}${value}`, error: '' });
    };

    handleClear = () => {
        this.setState({ words: [], inputValue: '', error: '' });
    };

    handleRealWordsFilter = () => {
        this.setState({ showedRealWordsOnly: !this.state.showedRealWordsOnly });
    };

    handleDelete = () => {
        this.setState({ inputValue: this.state.inputValue.slice(0, -1), error: '' });
    };

    render(): React$Node {
        const {
            inputValue,
            words,
            showedRealWordsOnly,
            isLoading,
            isSubmitButtonDisabled,
            error
        }: {
            inputValue: string,
            words: Array<ResponseWord>,
            showedRealWordsOnly: boolean,
            isLoading: boolean,
            isSubmitButtonDisabled: boolean,
            error: string
        } = this.state;
        return (
            <div className="App">
                <header className="App-header">
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
                    {isLoading && <img src={logo} className="App-logo" alt="logo" />}
                    {error && <span className="message__error">{error}</span>}
                    <div className="words-wrapper">
                        {words.map((word: ResponseWord, index: number): React$Node => (
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
                            className="number-input"
                            value={inputValue}
                            onChange={this.handleInputChange}
                        />
                        <Keyboard
                            onSubmit={this.handleSubmit}
                            isSubmitButtonDisabled={inputValue.length === 0 || isSubmitButtonDisabled}
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
