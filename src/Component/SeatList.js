import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SEAT } from "../constant/constant";

export class SeatList extends Component {
  renderSeatList = () => {
    return this.props.seatList.map((x, i) => {
      let { hang } = x;
      return (
        <tr key={i}>
          <th className="firstChar">{hang}</th>
          {x.danhSachGhe.map((item, index) => {
            let { gia, soGhe, daDat } = item;
            return (
              <td className={gia === 0 ? "firstChar" : ""} key={index}>
                {gia === 0 ? (
                  soGhe
                ) : (
                  <button
                    className={daDat === true ? "ghedaDat disabled" : "ghe btn btn-light"}
                    onClick={() => {
                      daDat === false && this.props.handleSelectSeat(item);
                    }}
                  >
                    {soGhe}
                  </button>
                )}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  render() {
    return <div className="table table-borderless ">{this.renderSeatList()}</div>;
  }
}

const mapStateToProps = (state) => ({
  seatList: state.movie.seatList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectSeat: (seat) => {
      let action = {
        type: ADD_SEAT,
        payload: seat,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatList);
