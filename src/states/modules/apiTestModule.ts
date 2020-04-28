import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

const get = async () => {
  const res = await fetch('https://qiita.com/api/v2/items');
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return JSON.stringify(json);
};

type State = {
  loading: boolean;
  res: string;
};

const initialState: State = {
  loading : false,
  res : 'init',
};

const apiTestModule = createSlice({
  name : 'apitest',
  initialState,
  reducers : {
    fetchStart(state: State, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchSuccess(state: State, action: PayloadAction<string>) {
      state.loading = false;
      state.res = action.payload;
    },
    fetchFailure(state: State, action: PayloadAction<string>) {
      state.loading = false;
      state.res = action.payload;
    }
  }
});

export const {
  fetchStart, fetchSuccess, fetchFailure
} = apiTestModule.actions;

export const fetchQiita = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(fetchStart(''));
    dispatch(fetchSuccess(await get()));
  } catch (error) {
    dispatch(fetchFailure(''));
  }
};

export default apiTestModule;
