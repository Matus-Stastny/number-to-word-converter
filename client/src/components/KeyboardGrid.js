// @flow
import React from 'react';
import styled from 'styled-components';

const KeyboardGrid = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`;

export default KeyboardGrid;
