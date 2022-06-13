import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/features/Main/components/Main/Main';
import configureStore from './src/store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
