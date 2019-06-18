import { createStore, applyMiddleware,  } from "redux";
import Reducers from "../Reducers";
import thunk from "redux-thunk";
import initialState from "../Reducers/initialState";

const store =createStore(Reducers, initialState, applyMiddleware(thunk));
 

export default store;