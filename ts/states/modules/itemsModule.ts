import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, Color } from '../models';

type State = {
  items : Item[];
};

 const initialState: State ={
   items: [
    {
      id : 0,
      name : 'init',
      amount : 5000,
      color : Color.Blue,
    },
  ]
};

const itemsModule = createSlice({
  name : 'items',
  initialState,
  reducers : {
    addItem(state : State, action: PayloadAction<Item>) {
      state.items = [action.payload, ...state.items];
    },
    deleteItem(state: State, action: PayloadAction<Item>) {
      state.items = state.items
        .filter(item => item.id !== action.payload.id);
    },
  }
})

export const {
  addItem,
  deleteItem,
} = itemsModule.actions;

export default itemsModule;
