import React from 'react';
import { shallow } from 'enzyme';

import { If } from '../util';

import '../components/config/testsConfig';

describe('[Resources] If', () => {
  const children = 'hello, world!';

  it('renders null if test is false', () => {
    const wrapper = shallow(<If test={false} children={children} />);
    expect(wrapper.debug()).toBe('');
  });

  it('renders children if test is true', () => {
    const wrapper = shallow(<If test children={children} />);
    expect(wrapper.debug()).toEqual(children);
  });
});
