import React, { Component } from "react";
import { connect } from "react-redux";
import { BOOKING, DELETE_SEAT } from "../constant/constant";
import Item from "antd/es/list/Item";
export class SelectedList extends Component {
  renderSelectedList = () => {
    return this.props.selectedList.map((x, i) => {
      return (
        <tr key={i}>
          <td className="text-light font-weight-bold display-5">{x.soGhe}</td>
          <td className="text-light font-weight-bold display-5">{x.gia}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="row mt-5">
        <div className="col-6">
          <div className="table table-bordered text-warning  mx-5">
            <tr>
              <th>SEAT</th>
              <th>PRICE</th>
            </tr>
            {this.renderSelectedList()}
          </div>
        </div>

        <div className="col-6">
          <button
            className="btn btn-warning font-weight-bold"
            onClick={() => {
              this.props.handleBooking();
            }}
          >
            Book
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedList: state.movie.selectedList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleBooking: () => {
      let action = {
        type: BOOKING,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
