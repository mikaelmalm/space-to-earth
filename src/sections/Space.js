import React, { useEffect, useRef, useCallback } from "react";
import "./Space.scss";
import { gsap, TimelineMax, Power1, Power3 } from "gsap";

import { Sun, Planet, Stars } from "components";

export const SpaceSection = () => {
  const mars = useRef();
  const tl = new TimelineMax();

  const pulsateAura = useCallback((planet) => {
    gsap.to(`[data-name="${planet}"] .glow`, 5, {
      scale: 1,
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
      transformOrigin: "50%",
      ease: Power1.inOut,
    });
  }, []);

  useEffect(() => {
    tl.staggerFrom(
      '[data-name="stars"] path',
      1,
      {
        autoAlpha: 0,
        y: -50,
      },
      0.05
    )

      .from(
        '[data-name="neptune"]',
        1,
        {
          y: -50,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("neptune"),
        },
        "-=0.5"
      )
      .from(
        '[data-name="uranus"]',
        1,
        {
          y: -80,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("uranus"),
        },
        "-=1"
      )
      .from(
        '[data-name="saturn"]',
        1,
        {
          y: 50,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("saturn"),
        },
        "-=1"
      )

      .from(
        '[data-name="mars"]',
        1,
        {
          x: 50,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("mars"),
        },
        "-=0.5"
      )
      .from(
        '[data-name="mercury"]',
        1,
        {
          x: -100,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("mercury"),
        },
        "-=1.2"
      )
      .from(
        '[data-name="jupiter"]',
        1,
        {
          y: -50,
          opacity: 0,
          ease: Power1.easeOut,
          onComplete: () => pulsateAura("jupiter"),
        },
        "-=1"
      )
      .from(
        '[data-name="sun"]',
        1,
        {
          y: 75,
          opacity: 0,
          ease: Power1.easeOut,
        },
        "-=0.5"
      );

    tl.pause();
    tl.play(0);
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
