import React from 'react';
import renderer from 'react-test-renderer';
import InfoListMovie from './InfoListMovie';

const props = {
  onClick: jest.fn(),
  info: {
    name: '',
    rating: '',
    description: '',
    genres: [],
    img: '',
    release_date: new Date(),
  },
};

describe('(Component) InfoListMovie', () => {
  it('should render an InfoListMovie with result', () => {
    const tree = renderer.create(<InfoListMovie {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
