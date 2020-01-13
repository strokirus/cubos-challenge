import React from 'react';
import renderer from 'react-test-renderer';
import MapComponent from './MapComponent';

const props = { };

describe('(Component) MapComponent', () => {
  it('should render an MapComponent with result', () => {
    const tree = renderer.create(<MapComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
