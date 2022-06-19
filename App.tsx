import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/createStore';
import Main from './src/features/Main/components/Main/Main';
import ModalContextProvider from './src/providers/ModalContextProvider';

const App = () => {
  return (
    <ModalContextProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ModalContextProvider>
  );
};

export default App;
