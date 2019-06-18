import { combineReducers } from "redux";

import Login from "./login";
import Dashboard from "./dashboard";

export default combineReducers({
  login: Login,
  dashboard: Dashboard
});
