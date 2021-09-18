import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import newsReducer from "./newsReducer";

const reducer = combineReducers({
  message: messageReducer,
  news: newsReducer,
});

export default reducer;
