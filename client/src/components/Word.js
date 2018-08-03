// @flow
import styled from 'styled-components';

const Word = styled.span`
    border: darkblue solid 0.5px;
    border-radius: 5px;
    margin-left: 3px;
    margin-bottom: 3px;
    padding: 4px 8px;
    display: ${({ isHidden }: { isHidden: boolean }): string => isHidden && 'none'};
    background: ${({ isReal }: { isReal: boolean }): string => (isReal ? '#ccc' : 'white')};
`;

export default Word;
