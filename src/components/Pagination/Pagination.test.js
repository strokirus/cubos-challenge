import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

const props = {
  current: 1,
  total: 10,
};

describe('(Component) Pagination', () => {
  it('should render an Pagination with result', () => {
    const tree = renderer.create(<Pagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
