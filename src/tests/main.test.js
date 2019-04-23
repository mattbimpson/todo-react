import React from 'react';
import Main from '../components/main';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import initialState from '../store/initialState';

const mockStore = configureStore();
const store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('todo item', () => {
  it('should render', () => {
    const wrapper = shallow(<Main store={store} />);
    //wrapper.find('#txtTodo').simulate('change', { target: { value: 'Hello' } });
    //wrapper.find('#btnAdd').simulate('click');
    //expect(wrapper.find('txtTodo').exists()).toBe(true);
  });
});
