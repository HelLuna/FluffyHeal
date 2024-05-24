import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page-slice.js';
import userInfoReducer from './user-info-slice.js';
//import userDataReducer from './user-data-slice.js';

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    pages: pageReducer
  }
});
