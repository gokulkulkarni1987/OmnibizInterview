import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middlewares = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
