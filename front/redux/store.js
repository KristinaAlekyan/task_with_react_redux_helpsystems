import { createStore, applyMiddleware } from "redux";
import usersReducer from "./reducer";
import reduxThunk from "redux-thunk";



export  const store = createStore(
    usersReducer, 
    applyMiddleware(reduxThunk)
);


