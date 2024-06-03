import { createSlice } from '@reduxjs/toolkit';
import { AppRoute, ModalRoute } from '../utils';

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    page: AppRoute.INITIAL,
    modal: ModalRoute.NONE
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload.page;
    },

    setModal(state, action) {
      state.modal = action.payload.modal;
    },
  }
});

export const { setPage, setModal } = pageSlice.actions;

export default pageSlice.reducer;
