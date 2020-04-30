import {combineReducers} from '@reduxjs/toolkit';
import itemListModule from './modules/itemListModule';
import displayInfoModule from './modules/displayInfoModule';

const rootReducer = combineReducers({
  items : itemListModule.reducer,
  info : displayInfoModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
