import React from 'react';
export interface AppModalState {
  sortJokesModalOpen: boolean;
  setSortJokesModalOpen: any;
  rateJokeModalOpen: boolean;
  setRateJokeModalOpen: any;
}
export const ModalContext = React.createContext<AppModalState>({
  sortJokesModalOpen: false,
  setSortJokesModalOpen: () => {},
  rateJokeModalOpen: false,
  setRateJokeModalOpen: () => {},
});
