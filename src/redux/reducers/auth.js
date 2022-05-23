import types from "../types";

const initial_state = {
  IsLogin: false,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.IS_LOGIN:
      const data = action.payload;
      return { isLogin: data };
    default:
      return { ...state };
  }
}
