import { message } from "antd";
import { ADD_SEAT, BOOKING, DELETE_SEAT } from "../constant/constant";
import { data } from "../data/data";

const initialState = {
  seatList: data,
  selectedList: [],
};

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SEAT: {
      let newSeat = payload;

      //select list
      let cloneSelected = [...state.selectedList];

      let checkInSelected = cloneSelected.findIndex((x) => {
        return x.soGhe === newSeat.soGhe;
      });
      if (checkInSelected === -1) {
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
    case BOOKING: {
      let cloneSelected = [...state.selectedList];
      if (cloneSelected.length == 0) {
        message.error("please select a seat");
      } else {
        message.success("Booking successfully");
      }
      //current list
      let cloneSeatList = [...state.seatList];
      cloneSeatList.map((x) => {
        return x.danhSachGhe.map((y) => {
          cloneSelected.includes(y) == true && (y.daDat = true);
        });
      });
      cloneSelected = [];
      console.log(cloneSeatList);
      return { ...state, seatList: cloneSeatList, selectedList: cloneSelected };
    }
    default:
      return state;
  }
};
