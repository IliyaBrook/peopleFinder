import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSaga";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";



const saga = createSagaMiddleware();
export default configureStore({
  reducer: {
    reducer,
    form:formReducer
  },
  middleware: [saga, thunk],
  devTools: true
});
saga.run(rootSaga);