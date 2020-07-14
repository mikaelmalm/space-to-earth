import React from "react";
import "./Land.scss";
import { Mountains, Wall, Trees, Grass, Waterfall, Water } from "components";

export const LandSection = () => {
  return (
    <div className="LandSection">
      <Mountains />

      <div className="bottom">
        <Wall />
        <Waterfall />
        <Trees />
        <Grass />
      </div>

      <Water />
    </div>
  );
};
