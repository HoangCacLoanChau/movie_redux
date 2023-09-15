import { data } from "../data/data";

const initialState = {
  seatList: data,
};

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
