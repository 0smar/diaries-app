import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

type AppDispath = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispath>();
export default store;