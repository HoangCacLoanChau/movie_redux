import React, { Component } from "react";
import SeatList from "./SeatList";

export default class Movie extends Component {
  render() {
    return (
      <div className="bg">
        <div className="title">Booking Seat</div>
        <div className="row">
          <div className="col-6">
            <SeatList />
          </div>
          <div className="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi, exercitationem
            debitis, architecto ex aut harum veritatis porro, iste maxime est aspernatur amet fugit
            ipsa iure nihil deleniti in minus!
          </div>
        </div>
      </div>
    );
  }
}
