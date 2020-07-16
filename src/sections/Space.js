import React, { useEffect, useCallback } from "react";
import { gsap, TimelineMax, Power1 } from "gsap";
import styled from "@emotion/styled";

import { Sun, Planet, Stars } from "components";

const StyledSpaceSection = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;

  [data-name="neptune"] {
    bottom: -35vmin;
    left: -25vmin;
    opacity: 0.4;

    svg {
      height: 100vmin;
      width: 100vmin;
    }

    @media (min-width: 920px) {
      left: -15vmin;
    }
  }

  [data-name="mars"] {
    right: -10vmin;
    bottom: 15vmin;
    left: auto;
    opacity: 0.8;
    transform: rotate(-45deg);

    @media (min-width: 920px) {
      right: 2vmin;
      bottom: -2vmin;
    }
  }

  [data-name="uranus"] {
    right: -12vw;
    top: 20vh;
    left: auto;

    @media (min-width: 920px) {
      top: -10vh;
      right: -6vw;
    }
  }

  [data-name="jupiter"] {
    left: 10vw;
    top: 20vh;
    opacity: 0.5;

    svg {
      transform: rotate(-40deg);
    }

    @media (min-width: 920px) {
      left: 15vw;
      top: 10vh;
    }
  }

  [data-name="mercury"] {
    left: -5vw;
    top: -2vh;

    svg {
      transform: rotate(-45deg);
      transform-origin: 50% 50%;
    }

    @media (min-width: 920px) {
      left: -5vw;
      bottom: -15vh;
    }
  }

  [data-name="saturn"] {
    left: 60vw;
    top: 1vh;
    transform: rotate(45deg);
  }

  [data-name="sun"] {
    bottom: 35vh;
    margin: 0 auto;
    right: 0;
    left: 0;

    @media (min-width: 920px) {
      bottom: 25vh;
    }
  }

  > div,
  > svg {
    position: absolute;
    left: 0;

    .glow {
      opacity: 0;
      /* This is some magic right here, taken from the GSAP transform statement */
      transform: matrix(0.88, 0, 0, 0.88, 17.8734, 18.1704);
    }
  }
`;

export const SpaceSection = () => {
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
    <StyledSpaceSection>
      <Stars />
      <Planet size="70vmin" color="green" name="neptune" />
      <Planet size="50vmin" color="orange" name="mars" />
      <Planet size="40vmin" color="cyan" name="uranus" />
      <Planet size="35vmin" color="pink" name="jupiter" />
      <Planet size="38vmin" color="darkPink" name="mercury" />
      <Planet size="30vmin" type="ring" name="saturn" />

      <Sun size="50vmin" name="sun" />
    </StyledSpaceSection>
  );
};
