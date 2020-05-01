import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayInfo } from '../models';

type State = {
  displayYear: number,
  displayMonth: number,
};

const initialState: State = {
  displayYear: new Date().getFullYear(),
  displayMonth: new Date().getMonth()+1,
}

const displayInfoModule = createSlice({
  name : 'displayInfo',
  initialState,
  reducers : {
    init(state : State) {
      state = initialState;
    },
    change(state : State, action: PayloadAction<DisplayInfo>) {
      state = action.payload;
    },
  }
});

export const {
  init, change,
} = displayInfoModule.actions;

export default displayInfoModule;
