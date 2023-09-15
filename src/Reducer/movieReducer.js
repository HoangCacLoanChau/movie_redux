import { data } from "../data/data";

const initialState = {
  seatList: data,
  selectedList: [
    { soGhe: "A1", price: 75000 },
    { soGhe: "A1", price: 75000 },
    { soGhe: "A1", price: 75000 },
  ],
};

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
