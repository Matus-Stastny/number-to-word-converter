import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({ onButtonPress }) => {
    return (
        <div className="keyboard">
            <div className="keyboard__line">
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('1')}
                >
                    1
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('2')}
                >
                    2
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('3')}
                >
                    3
                </button>
            </div>
            <div className="keyboard__line">
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('4')}
                >
                    4
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('5')}
                >
                    5
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('6')}
                >
                    6
                </button>
            </div>
            <div className="keyboard__line">
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('7')}
                >
                    7
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('8')}
                >
                    8
                </button>
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('6')}
                >
                    9
                </button>
            </div>
            <div className="keyboard__line">
                <button
                    className="keyboard__button"
                    onClick={() => onButtonPress('0')}
                >
                    0
                </button>
            </div>
        </div>
    );
};

Keyboard.propTypes = {
    onButtonPress: PropTypes.func.isRequired
};

export default Keyboard;
