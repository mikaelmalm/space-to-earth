import React from "react";
import "./Sky.scss";
import {
  LargeCloud,
  SmallCloud,
  Cloud,
  Balloons,
  Parachutes,
} from "components";

const Sky = () => (
  <>
    <div className="background">
      <div className="row">
        <SmallCloud />
        <Cloud />
        <LargeCloud />
        <SmallCloud />
        <Cloud />
        <LargeCloud />
        <Cloud />
        <Cloud />
      </div>
      <div className="row">
        <SmallCloud />
        <Cloud />
        <LargeCloud />

        <LargeCloud />
        <Cloud />
        <Cloud />
      </div>
      <div className="row">
        <Cloud />
        <SmallCloud />
        <SmallCloud />
        <LargeCloud />
        <Cloud />

        <Cloud />
        <LargeCloud />
        <Cloud />
      </div>
      <div className="row">
        <LargeCloud />
        <Cloud />

        <SmallCloud />
        <SmallCloud />
        <Cloud />
        <LargeCloud />
        <Cloud />
      </div>
    </div>

    <div className="foreground">
      <LargeCloud />
      <Cloud />
      <SmallCloud />
      <Cloud />
      <Cloud />
      <SmallCloud />
      <LargeCloud />
    </div>
  </>
);

export const SkySection = () => {
  return (
    <div className="SkySection">
      <Sky />

      <Balloons />
      <Parachutes />
    </div>
  );
};
