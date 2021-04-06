import React from "react";
import "../../../Assets/CSS/style.css";
import note8pro from "../../../Assets/Images/note8pro.jpg";
import note20ultra from "../../../Assets/Images/note20ultra.jpg";
import samsunga50 from "../../../Assets/Images/samsunga50.jpg";
import FloatingActionButton from "../Components/FloatingActionButton.jsx";
import ArrowCircleLeft from "../../../Icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../Icons/ArrowCircleRight.jsx";
import PriceTag from "../../../Icons/PriceTag.jsx";
const CarouselOfMainPage = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={note8pro} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5>Redmi note 8 pro</h5>
            <p>Revolutionary Leica Quad X10 Hybrid Zoom</p>
            <a className="btn btn-success btn-lg" href="#">
              Compare Pricing <PriceTag />
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={note20ultra} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5>Samsung Note 20 Ultra</h5>
            <p>More powerful , more faster and larger storage</p>
            <a className="btn btn-success btn-lg" href="#">
              Compare Pricing <PriceTag />
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={samsunga50} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5>Samsung A50</h5>
            <p>Perfect design and supports finger print</p>
            <a className="btn btn-success btn-lg" href="#">
              Compare Pricing <PriceTag />
            </a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <FloatingActionButton icon={<ArrowCircleLeft />} />
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <FloatingActionButton icon={<ArrowCircleRight />} />
      </button>
    </div>
  );
};

export default CarouselOfMainPage;
