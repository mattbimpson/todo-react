import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '../components/Todo';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import initialState from '../store/initialState';

const mockStore = configureStore();
const store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('todo item', () => {
  it('should render', () => {
    const wrapper = shallow(<Todo store={store} />);
  });
});
