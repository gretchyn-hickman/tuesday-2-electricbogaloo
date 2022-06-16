import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favsReducer from "./favsReducer";

const rootReducer = combineReducers({
  movieReducer,
  favsReducer,
});
export default rootReducer;
