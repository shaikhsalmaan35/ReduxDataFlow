import { createStore, combineReducers } from "redux";
import { groupReducers } from "../Reducer/GroupReducer";

export const configureStore = () => {
  const store = createStore(
    combineReducers({ groupReducers }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
