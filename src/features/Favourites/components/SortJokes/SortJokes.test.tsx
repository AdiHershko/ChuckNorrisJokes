import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SortJokes from './SortJokes';
import {SORTING_TYPE} from '../../../../actions/sortActions';


const mockCloseFn = jest.fn();
const mockSortJokesFn = jest.fn();

const renderComponent = (Component: any) => {
  const props = {close: mockCloseFn, sortJokes: mockSortJokesFn};
  return render(<Component {...props} />);
};

describe('SortJokes', () => {
  describe('Text rendering tests', () => {
    it('Should render title: Sort Jokes', () => {
      const {getByText} = renderComponent(SortJokes);
      getByText('Sort Jokes');
    });

    it('Should render option: Funny - Top to Bottom', () => {
      const {getByText} = renderComponent(SortJokes);
      getByText('Funny - Top to Bottom');
    });

    it('Should render option: Funny - Bottom to Top', () => {
      const {getByText} = renderComponent(SortJokes);
      getByText('Funny - Bottom to Top');
    });
  });

  describe('Button tests', () => {
    it('Should render close button', () => {
      const {getByLabelText} = renderComponent(SortJokes);
      getByLabelText('SortJokes-close');
    });

    it('Should invoke close function when pressing close button', () => {
      const {getByLabelText} = renderComponent(SortJokes);
      const closeButton = getByLabelText('SortJokes-close');
      fireEvent.press(closeButton);
      expect(mockCloseFn).toHaveBeenCalled();
    });

    it('Should invoke sortJokes with top to bottom sorting type when pressing sort top to bottom button', () => {
      const {getByLabelText} = renderComponent(SortJokes);
      const sortTopToBottomBtn = getByLabelText('SortJokes-sort-top');
      fireEvent.press(sortTopToBottomBtn);
      expect(mockSortJokesFn).toBeCalledWith(SORTING_TYPE.TOP_TO_BOTTOM);
    });

    it('Should invoke sortJokes with bottom to top sorting type when pressing sort bottom to top button', () => {
      const {getByLabelText} = renderComponent(SortJokes);
      const sortTopToBottomBtn = getByLabelText('SortJokes-sort-bottom');
      fireEvent.press(sortTopToBottomBtn);
      expect(mockSortJokesFn).toBeCalledWith(SORTING_TYPE.BOTTOM_TO_TOP);
    });
  });
});
