import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({ onButtonPress, onDelete, onSubmit, isSubmitButtonDisabled }) => {
    return (
        <div className="keyboard">
            <div className="keyboard__line">
                <button className="keyboard__button" onClick={onDelete}>
                    Del
                </button>
                <button className="keyboard__button" disabled={isSubmitButtonDisabled} onClick={onSubmit}>
                    Submit
                </button>
            </div>
            <div className="keyboard__line">
                <div className="keyboard__button" onClick={() => onButtonPress('1')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">1</span>
                        <span className="keyboard__letters">-</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('2')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">2</span>
                        <span className="keyboard__letters">a b c</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('3')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">3</span>
                        <span className="keyboard__letters">d e f</span>
                    </div>
                </div>
            </div>
            <div className="keyboard__line">
                <div className="keyboard__button" onClick={() => onButtonPress('4')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">4</span>
                        <span className="keyboard__letters">g h i</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('5')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">5</span>
                        <span className="keyboard__letters">j k l</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('6')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">6</span>
                        <span className="keyboard__letters">m n o</span>
                    </div>
                </div>
            </div>
            <div className="keyboard__line">
                <div className="keyboard__button" onClick={() => onButtonPress('7')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">7</span>
                        <span className="keyboard__letters">p q r s</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('8')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">8</span>
                        <span className="keyboard__letters">t u v</span>
                    </div>
                </div>
                <div className="keyboard__button" onClick={() => onButtonPress('9')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">9</span>
                        <span className="keyboard__letters">w x y z</span>
                    </div>
                </div>
            </div>
            <div className="keyboard__line--last">
                <div className="keyboard__button" onClick={() => onButtonPress('0')}>
                    <div className="keyboard__chars-wrapper">
                        <span className="keyboard__number">0</span>
                        <span className="keyboard__letters">? ! .</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Keyboard.propTypes = {
    onButtonPress: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isSubmitButtonDisabled: PropTypes.bool.isRequired
};

export default Keyboard;
