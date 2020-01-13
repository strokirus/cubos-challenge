import React from 'react';
import renderer from 'react-test-renderer';
import ModalComponent from './ModalComponent';

const props = { };

describe('(Component) ModalComponent', () => {
  it('should render an ModalComponent with result', () => {
    const tree = renderer.create(<ModalComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
