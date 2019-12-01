import React from 'react';
import renderer from 'react-test-renderer';
import Chip from './Chip';

const props = {
  onClick: jest.fn(),
  text: 'Ação',
};

describe('(Component) Chip', () => {
  it('should render an Chip with result', () => {
    const tree = renderer.create(<Chip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
