import React, { Component } from "react";
import SeatList from "./SeatList";
import SelectedList from "./SelectedList";

export default class Movie extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="title">Booking Seat</div>
        <div className="row ml-5">
          <div className="col-xl-6 col-lg-12  d-flex flex-column align-items-center  ">
            <div className="manhinh">Screen</div>
            <div className="screen mb-1"></div>
            <div>
              <SeatList />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 px-5">
            <div className="manhinh text-center text-warning">Selected Seat List</div>
            <div className="d-flex flex-column px-5">
              <div className="d-flex">
                <div className=" gheDuocChon"></div>
                <span className="ml-5 manhinh">Selected Seat</span>
              </div>
              <div className="d-flex my-3">
                <div className="gheDangChon "></div>
                <span className="ml-5 manhinh">Selecting Seat</span>
              </div>
              <div className="d-flex">
                <div className="gheChuaChon "></div>
                <span className="ml-5 manhinh">Available Seat</span>
              </div>
            </div>
            <div>
              <SelectedList></SelectedList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
