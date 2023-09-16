import { message } from "antd";
import { ADD_SEAT, DELETE_SEAT } from "../constant/constant";
import { data } from "../data/data";

const initialState = {
  seatList: data,
  selectedList: [],
};

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SEAT: {
      let cloneSeatList = [...state.seatList];
      let seats = cloneSeatList.map((x) => {
        return x.danhSachGhe;
      });

      let newSeat = payload;
      let cloneSelected = [...state.selectedList];
      let checkInSeatList = seats.findIndex((x) => {
        return x.soGhe == newSeat.soGhe;
      });
      let checkInSelected = cloneSelected.findIndex((x) => {
        return x.soGhe == newSeat.soGhe;
      });
      if (checkInSelected === -1) {
        newSeat.daDat = true;
        cloneSelected.push(newSeat);
      } else {
        message.error("Seat is selected");
      }
      console.log("list", state.selectedList);
      return { ...state, selectedList: cloneSelected };
    }
    case DELETE_SEAT: {
      let cloneSelected = [...state.selectedList];
      let checkSeat = cloneSelected.findIndex((x) => {
        return x.soGhe == payload.soGhe;
      });
      if (checkSeat !== -1) {
        cloneSelected.splice(checkSeat, 1);
        message.success("Delete successfully");
      } else {
        message.error("delete fail");
      }
      return { ...state, selectedList: cloneSelected };
    }

    default:
      return state;
  }
};
