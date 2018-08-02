// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import KeyboardButton from './KeyboardButton';
import KeyboardGrid from './KeyboardGrid';
import KeyboardLine from './KeyboardLine';

type Props = {
    onButtonPress: (value: string) => void,
    onDelete: () => void,
    onSubmit: () => void,
    isSubmitButtonDisabled: boolean
};

const keyboardData = {
    '1': '-',
    '2': 'a b c',
    '3': 'd e f',
    '4': 'g h i',
    '5': 'j k l',
    '6': 'm n o',
    '7': 'p q r s',
    '8': 't u v',
    '9': 'w x y z'
};

const Keyboard = (props: Props): React.Node => {
    return (
        <div className="keyboard">
            <KeyboardLine>
                <KeyboardButton characters="Del" onClick={props.onDelete} />
                <KeyboardButton
                    characters="Submit"
                    onClick={props.onSubmit}
                    isButtonDisabled={props.isSubmitButtonDisabled}
                />
            </KeyboardLine>
            <KeyboardGrid>
                {Object.keys(keyboardData).map((key: string): React$Node => (
                    <KeyboardButton
                        key={key}
                        number={key}
                        characters={keyboardData[key]}
                        onClick={(): void => props.onButtonPress(key)}
                    />
                ))}
            </KeyboardGrid>

            <KeyboardLine isLast>
                <KeyboardButton number="0" characters="? ! ." onClick={(): void => props.onButtonPress('0')} />
            </KeyboardLine>
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
