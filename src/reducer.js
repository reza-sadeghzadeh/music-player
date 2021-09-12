import * as actions from "./actionTypes";

export const initialState = {
  currentTime: 0,
  duration: 0,
  libopen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.timeUpdate:
      return { ...state, currentTime: payload.currentTime };

    case actions.setDuration:
      return { ...state, duration: payload.duration };

    case actions.setLibopen:
      return { ...state, libopen: payload.libopen };

    default:
      return state;
  }
};
