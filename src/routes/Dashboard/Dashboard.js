import React, { Component } from "react";

export default class Dashboard extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.location.href =
        "https://en-gb.topographic-map.com/maps/zr8/India/";
    }
  }
  render() {
    return <div></div>;
  }
}
