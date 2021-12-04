import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSaga";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'



const routerBrowserMiddleware = routerMiddleware(BrowserRouter)
const saga = createSagaMiddleware();
export default configureStore({
  reducer: {
    reducer,
    form:formReducer,

  },
  middleware: [saga, thunk, routerBrowserMiddleware],
  devTools: true
});
saga.run(rootSaga);