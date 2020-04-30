import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayInfo } from '../models';

type State = {
  displayInfo: DisplayInfo;
};

const initialState: State = {
  displayInfo: {
    displayYear: new Date().getFullYear(),
    displayMonth: new Date().getMonth()+1,
  },
}

const displayInfoModule = createSlice({
  name : 'displayInfo',
  initialState,
  reducers : {
    init(state : State) {
      state.displayInfo = initialState.displayInfo;
    },
    change(state : State, action: PayloadAction<DisplayInfo>) {
      state.displayInfo = action.payload;
    },
  }
});

export const {
  init, change,
} = displayInfoModule.actions;

export default displayInfoModule;
