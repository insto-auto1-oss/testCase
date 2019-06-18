import initialState from "./initialState";

export default (state = initialState.login, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginSuccess: action.data };
    default:
      return state;
  }
};
