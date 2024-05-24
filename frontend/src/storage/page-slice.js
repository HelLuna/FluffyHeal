import { createSlice } from '@reduxjs/toolkit';
import { AppRoute } from '../utils';

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    page: AppRoute.INITIAL
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload.page;
    },

    signIn() { },
    signUp() { }
  }
});

export const { setPage, signIn, signUp } = pageSlice.actions;

export default pageSlice.reducer;
