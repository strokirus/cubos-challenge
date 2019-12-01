import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './Rating';

const props = {
  onClick: jest.fn(),
  text: 'Ação',
};

describe('(Component) Rating', () => {
  it('should render an Rating with result', () => {
    const tree = renderer.create(<Rating {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
