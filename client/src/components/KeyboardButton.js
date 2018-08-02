// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    characters: string,
    number: ?string,
    onClick: () => void,
    isButtonDisabled: ?boolean
};

const KeyboardButtonWrapper = styled.button`
    min-width: 208px;
    flex-grow: 1;
    padding: 10px 40px;
    font-family: sans-serif;
    text-align: center;
    background: white;
    border: black solid 1px;
    border-radius: 5px;
    margin-left: 3px;
    margin-bottom: 3px;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
    cursor: pointer;
    &:active {
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow: inset 0 0 10px #000000;
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        background: #f2f2f2;
        cursor: none;
    }
`;

const KeyboardCharactersWrapper = styled.span`
    display: flex;
    flex-direction: column;
`;

const Characters = styled.span`
    font-size: ${({ isNumber }: { isNumber: boolean }): string => (isNumber ? '30px' : '15px')};
    color: ${({ isNumber }: { isNumber: boolean }): string => (isNumber ? 'black' : 'gray')};
`;

const KeyboardButton = (props: Props): React$Node => (
    <KeyboardButtonWrapper onClick={props.onClick} disabled={props.isButtonDisabled}>
        <KeyboardCharactersWrapper>
            {props.number ? <Characters isNumber>{props.number}</Characters> : null}
            <Characters>{props.characters}</Characters>
        </KeyboardCharactersWrapper>
    </KeyboardButtonWrapper>
);

KeyboardButton.defaultProps = {
    isButtonDisabled: false,
    number: undefined
};

export default KeyboardButton;
