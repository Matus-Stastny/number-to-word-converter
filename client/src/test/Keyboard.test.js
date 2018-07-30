import React from 'react';
import renderer from 'react-test-renderer';

import Keyboard from '../components/Keyboard';

describe('Keyboard', () => {
    test('component renders corectly', () => {
        const tree = renderer
            .create(
                <Keyboard
                    onButtonPress={() => console.log('onButtonPress')}
                    onDelete={() => console.log('onDelete')}
                    onSubmit={() => console.log('onSubmit')}
                    isSubmitButtonDisabled={false}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
