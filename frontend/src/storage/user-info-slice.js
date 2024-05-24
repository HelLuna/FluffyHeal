import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
  name: 'user.info',
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    fatherland: null,
    birthday: null,
    email: null,
    phone: null,
    imageUrl: null
  },
  reducers: {
  }
});

export const { } = userInfoSlice.actions;

export default userInfoSlice.reducer;
