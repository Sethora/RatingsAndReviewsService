
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import App from '/Users/sethlassen/Desktop/FEC/RatingsAndReviewsService/client/src/index.jsx'
import Title from '/Users/sethlassen/Desktop/FEC/RatingsAndReviewsService/client/src/Title.jsx'

describe('App Test Suite', () => {
  const wrapper = shallow(<App />);

  test('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });