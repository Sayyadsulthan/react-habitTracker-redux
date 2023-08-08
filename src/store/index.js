import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";

// const logger =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     console.log("ACTION TYPE = ", action.type);
//     if (typeof action === "function") {
//       return action(dispatch, getState);
//     }
//     next(action);
//   };

// const store = createStore(reducer, applyMiddleware(logger));
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // logger code
    console.log("ACTION_TYPE = ", action.type);
    console.log("ACTION_State = ", action);
    if (typeof action === "function") {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(dispatch, getState);
    }
    return next(action);
  };

const store = createStore(reducer, applyMiddleware(logger));

export default store;
