import { createStore, combineReducers } from 'redux';

import initialStoreState from './initialStoreState';
import listReducer from './reducers/list.reducer';

export default function () {

  const rootReducer = combineReducers({
    lists: listReducer
  });

  const store = createStore(
    rootReducer,
    initialStoreState,
    window.devToolsExtension && window.devToolsExtension()
  );

  return store;
}