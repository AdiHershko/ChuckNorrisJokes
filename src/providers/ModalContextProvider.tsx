import React, {useState} from 'react';
import {AppModalState, ModalContext} from '../context/ModalContext';

const AppContextProvider = ({children}) => {
  const [modalsState, setModalState] = useState<AppModalState>({
    sortJokesModalOpen: false,
    setSortJokesModalOpen: (value: boolean) =>
      setModalState({
        ...modalsState,
        sortJokesModalOpen: value,
      }),
    rateJokeModalOpen: false,
    setRateJokeModalOpen: (value: boolean) =>
      setModalState({
        ...modalsState,
        rateJokeModalOpen: value,
      }),
  });
  return (
    <ModalContext.Provider value={modalsState}>
      {children}
    </ModalContext.Provider>
  );
};

export default AppContextProvider;
