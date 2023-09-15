import React, { Component } from "react";
import { connect } from "react-redux";

export class SelectedList extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="gheDangChon "></div>
            <span className="ml-5">Selected Seat</span>
          </div>
          <div className="d-flex my-3">
            <div className="gheDuocChon "></div>
            <span className="ml-5 ">Selecting Seat</span>
          </div>
          <div className="d-flex">
            <div className="gheChuaChon "></div>
            <span className="ml-5">Available Seat</span>
          </div>
        </div>
        <div class=" table-bordered  my-5">
          <tr>
            <th>Slot</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
