import { combineReducers } from "redux";

import { getPostsReducer } from "./postReducers";

export default combineReducers({
  getPosts: getPostsReducer,
});
