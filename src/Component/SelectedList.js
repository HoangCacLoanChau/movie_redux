import React, { Component } from "react";
import { connect } from "react-redux";

export class SelectedList extends Component {
  renderSelectedList = () => {
    return this.props.selectedList.map((x, i) => {
      return (
        <tr key={i}>
          <td className="text-light font-weight-bold display-5">{x.soGhe}</td>
          <td className="text-light font-weight-bold display-5">{x.price}</td>
          <td>
            <button className="btn btn-danger">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="gheDangChon "></div>
            <span className="ml-5 manhinh">Selected Seat</span>
          </div>
          <div className="d-flex my-3">
            <div className="gheDuocChon "></div>
            <span className="ml-5 manhinh">Selecting Seat</span>
          </div>
          <div className="d-flex">
            <div className="gheChuaChon "></div>
            <span className="ml-5 manhinh">Available Seat</span>
          </div>
        </div>
        <div className="table table-bordered text-warning mt-5">
          <tr>
            <th>SEAT</th>
            <th>PRICE</th>
            <th>DELETE</th>
          </tr>
          {this.renderSelectedList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedList: state.movie.selectedList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
