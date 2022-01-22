import React, { Component } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Footer from "../../components/Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Part1 />
        <Part2 />
        <Footer />
      </div>
    );
  }
}
