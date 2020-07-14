import React from "react";
import "./Atmosphere.scss";
import { Satelite, Rocket } from "components";

export const AtmosphereSection = () => {
  return (
    <div className="AtmosphereSection">
      <Satelite />
      <Rocket />
    </div>
  );
};
