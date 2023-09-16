import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_SEAT } from "../constant/constant";

export class SelectedList extends Component {
  renderSelectedList = () => {
    return this.props.selectedList.map((x, i) => {
      return (
        <tr key={i}>
          <td className="text-light font-weight-bold display-5">{x.soGhe}</td>
          <td className="text-light font-weight-bold display-5">{x.gia}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handdleDeleteSeat(x);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="table table-bordered text-warning mt-5 mx-5">
        <thead>
          <tr>
            <th>SEAT</th>
            <th>PRICE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        {this.renderSelectedList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedList: state.movie.selectedList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handdleDeleteSeat: (seat) => {
      let action = {
        type: DELETE_SEAT,
        payload: seat,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
