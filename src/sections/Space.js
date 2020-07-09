import React, { useEffect, useRef } from "react";
import "./Space.scss";
import { gsap, TimelineMax, Power1, Power3 } from "gsap";

import { Sun, Planet, Stars } from "components";

export const SpaceSection = () => {
  const mars = useRef();
  const tl = new TimelineMax();

  useEffect(() => {
    tl.staggerFrom(
      '[data-name="stars"] path',
      1,
      {
        autoAlpha: 0,
        y: -50,
      },
      0.1
    )

      .from(
        '[data-name="neptune"]',
        1,
        {
          y: -150,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.25"
      )
      .from(
        '[data-name="uranus"]',
        1,
        {
          y: -50,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.5"
      )
      .from(
        '[data-name="saturn"]',
        1,
        {
          y: 100,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.25"
      )
      .from(
        '[data-name="mercury"]',
        1,
        {
          x: -100,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.25"
      )
      .from(
        '[data-name="mars"]',
        1,
        {
          x: 150,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.5"
      )
      .from(
        '[data-name="jupiter"]',
        1,
        {
          x: 50,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.25"
      )
      .from(
        '[data-name="sun"]',
        2,
        {
          y: 50,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.5"
      );
  }, [tl]);

  return (
    <div className="SpaceSection">
      <Stars />
      <Planet size="70vmin" color="green" name="neptune" />
      <Planet ref={mars} size="50vmin" color="orange" name="mars" />
      <Planet size="40vmin" color="cyan" name="uranus" />
      <Planet size="35vmin" color="pink" name="jupiter" />
      <Planet size="38vmin" color="darkPink" name="mercury" />
      <Planet size="30vmin" type="ring" name="saturn" />

      <Sun size="50vmin" name="sun" />
    </div>
  );
};
