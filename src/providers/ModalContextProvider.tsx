import React, {useState} from 'react';
import {AppModalState, ModalContext} from '../context/ModalContext';

const ModalContextProvider = ({children}) => {
  const [rateJokeModalOpen, setRateJokeModalOpen] = useState<boolean>(false);
  const [sortJokesModalOpen, setSortJokesModalOpen] = useState<boolean>(false);

  const modalsState: AppModalState = {
    rateJokeModalOpen,
    setRateJokeModalOpen,
    sortJokesModalOpen,
    setSortJokesModalOpen,
  };
  return (
    <ModalContext.Provider value={modalsState}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
