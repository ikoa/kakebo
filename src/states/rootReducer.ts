import {combineReducers} from '@reduxjs/toolkit';
import itemsModule from './modules/itemsModule';
import apiTestModule from './modules/apiTestModule';

const rootReducer = combineReducers({
  items: itemsModule.reducer,
  apitest: apiTestModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
