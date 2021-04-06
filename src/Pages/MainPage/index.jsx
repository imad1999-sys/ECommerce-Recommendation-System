import React, { Component } from "react";
import CarouselOfMainPage from "../MainPage/Components/CarouselOfMainPage.jsx";
import CarouselOfCompanies from "./Components/CarouselOfCompanies.jsx";
import Paper from "@material-ui/core/Paper";
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="carousels-section">
          <div className="row">
            <div class="col-sm-5">
              <Paper elevation={10}>
                  <div className="stores-home-page">
                      <p className="title">Stores in electronic home</p>
                      <a href="#" className="see-all-link">See All</a>
                  </div>
                <CarouselOfCompanies />
              </Paper>
            </div>
            <div class="col-sm-7">
              <Paper elevation={10}>
                <CarouselOfMainPage />
              </Paper>
            </div>
          </div>
          <div className="row g-0"></div>
        </div>
      </div>
    );
  }
}
