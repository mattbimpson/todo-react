import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import initialState from './store/initialState';
import './App.css';
import Main from './components/main';

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
