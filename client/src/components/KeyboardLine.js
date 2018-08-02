// @flow
import React from 'react';
import styled from 'styled-components';

const KeyboardLine = styled.div`
    display: flex;
    width: ${({ isLast }: { isLast: boolean }): string => (isLast ? 'auto' : '100%')};
`;

KeyboardLine.defaultProps = {
    isLast: false
};
export default KeyboardLine;
