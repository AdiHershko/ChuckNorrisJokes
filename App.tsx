import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/createStore';
import Main from './src/features/Main/components/Main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
