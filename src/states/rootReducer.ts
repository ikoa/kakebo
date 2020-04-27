import {combineReducers} from '@reduxjs/toolkit';
import itemsModule from './modules/itemsModule';

const rootReducer = combineReducers({
  items: itemsModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
