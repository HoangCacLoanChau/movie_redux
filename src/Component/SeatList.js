import React, { Component } from "react";
import { connect } from "react-redux";

export class SeatList extends Component {
  renderSeatList = () => {
    return this.props.seatList.map((x, i) => {
      let { hang } = x;
      return (
        <tr key={i}>
          <th className="firstChar">{hang}</th>
          {x.danhSachGhe.map((item, index) => {
            return (
              <td className={item.gia === 0 ? "firstChar" : "ghe"} key={index}>
                {item.soGhe}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);
