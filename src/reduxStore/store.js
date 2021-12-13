import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/users/usersReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSaga";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { authorizeUserReducer } from "./reducers/authorizeUser/authorizeUserReducer";



const routerBrowserMiddleware = routerMiddleware(BrowserRouter)
const saga = createSagaMiddleware();
export default configureStore({
  reducer: {
    usersReducer,
    form:formReducer,
    authorizeUserReducer
  },
  middleware: [saga, thunk, routerBrowserMiddleware],
  devTools: true
});
saga.run(rootSaga);