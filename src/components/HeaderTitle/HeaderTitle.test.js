import React from 'react';
import renderer from 'react-test-renderer';
import HeaderTitle from './HeaderTitle';

const props = {
  onClick: jest.fn(),
  text: 'Ação',
};

describe('(Component) HeaderTitle', () => {
  it('should render an HeaderTitle with result', () => {
    const tree = renderer.create(<HeaderTitle {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
