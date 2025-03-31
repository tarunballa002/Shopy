import React from "react";
import Menproducts from "../MenProducts/Menproducts";
import MenBanner from "../Hero/MenBanner";

const MenSection = () => {
  return (
    <div className="mensection">
      <MenBanner/>
      <Menproducts/>
    </div>
  );
};

export default MenSection;
