import React from "react";
import white from "../../../Assets/Images/white.jpg";
import AvatarImage from "../Components/AvatarImage.jsx";
import amazon from "../../../Assets/Images/amazon.png";
import ebay from "../../../Assets/Images/ebay.png";
import huawei from "../../../Assets/Images/huawei.png";
import ikea from "../../../Assets/Images/ikea.png";
import virgin from "../../../Assets/Images/virgin.png";
import xcite from "../../../Assets/Images/xcite.png";
import FloatingActionButton from "../Components/FloatingActionButton.jsx";
import ArrowCircleLeft from "../../../Icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../Icons/ArrowCircleRight.jsx";
import "../../../Assets/CSS/style.css";
const carouselOfCompanies = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col">
                  <AvatarImage alt="Amazon" image={amazon} />
                  <p className="name">Amazon</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Ebay" image={ebay} />
                  <p className="name">Ebay</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Virgin Megastore" image={virgin} />
                  <p className="name">Virgin Megastore</p>
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  <AvatarImage alt="Huawei" image={huawei} />
                  <p className="name">Huawei</p>
                </div>
                <div className="col">
                  <AvatarImage alt="IKEA" image={ikea} />
                  <p className="name">IKEA</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Xcite" image={xcite} />
                  <p className="name">Xcite</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col">
                  <AvatarImage alt="Huawei" image={huawei} />
                  <p className="name">Huawei</p>
                </div>
                <div className="col">
                  <AvatarImage alt="IKEA" image={ikea} />
                  <p className="name">IKEA</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Xcite" image={xcite} />
                  <p className="name">Xcite</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <FloatingActionButton icon={<ArrowCircleLeft />} />
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <FloatingActionButton icon={<ArrowCircleRight />} />
        </button>
      </div>
    </div>
  );
};
export default carouselOfCompanies;
