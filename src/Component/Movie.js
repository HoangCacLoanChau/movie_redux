import React, { Component } from "react";
import SeatList from "./SeatList";
import SelectedList from "./SelectedList";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <div className="title">Booking Seat</div>
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-center">
            <div className="manhinh">Screen</div>
            <div className="screen mb-1"></div>
            <div>
              <SeatList />
            </div>
          </div>
          <div className="col-6">
            <div className="manhinh text-center">
              Selected Seat List
              <SelectedList></SelectedList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
