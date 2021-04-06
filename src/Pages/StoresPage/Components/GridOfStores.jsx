import React from "react";
import AvatarImage from "../Components/AvatarImage.jsx";
import Amazon from "../../../Assets/Images/amazon.png";
import Ebay from "../../../Assets/Images/ebay.png";
import Huawei from "../../../Assets/Images/huawei.png";
import IKEA from "../../../Assets/Images/ikea.png";
import Lacoste from "../../../Assets/Images/lacoste.png";
import MAC from "../../../Assets/Images/mac.png";
import Virgin from "../../../Assets/Images/virgin.png";
import Xcite from "../../../Assets/Images/xcite.png";
import "../../../Assets/CSS/style.css"
import OptionsSection from "./OptionsSection.jsx";
const gridOfStores = () => {
  return (
    <div className="grid-of-stores-container">
      <div class="row">
        <div class="col-6 col-md-4">
          <AvatarImage alt="Amazon" image={Amazon} />
          <OptionsSection title="Amazon" value="4.5" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="Ebay" image={Ebay} />
          <OptionsSection title="Ebay" value="4.7" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="Huawei" image={Huawei} />
          <OptionsSection title="Huawei" value="5" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="IKEA" image={IKEA} />
          <OptionsSection title="IKEA" value="4.1" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="Lacoste" image={Lacoste} />
          <OptionsSection title="Lacoste" value="4.5" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="MAC" image={MAC} />
          <OptionsSection title="MAC" value="3.7" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="Virgin" image={Virgin} />
          <OptionsSection title="Virgin Megastore" value="4.8" />
        </div>
        <div class="col-6 col-md-4">
          <AvatarImage alt="Xcite" image={Xcite} />
          <OptionsSection title="Xcite" value="4.3" />
        </div>
      </div>
    </div>
  );
};

export default gridOfStores
