// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import asyncMiddleware from '../middleware/asyncMiddleware';

const store = createStore(
  reducer,
  applyMiddleware(asyncMiddleware)
);

export default store;
