//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Wrapper from '../demo';

describe('Divider', () => {
  it('css', () => {
    const Target = <Wrapper />;
    expect(renderer.create(Target).toJSON()).toMatchSnapshot();
  });
});
