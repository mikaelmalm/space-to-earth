import React, { useEffect, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import { Satelite, Rocket } from "components";
import { gsap, TimelineMax, Power4, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledAtmosphereSection = styled.div`
  min-height: 40vh;
  position: relative;

  [data-name="Satelite"] {
    width: 20vmin;
    position: absolute;
    right: 5vw;
    top: -5vh;
    transform: rotate(25deg);

    @media (min-width: 920px) {
      right: 20vw;
      top: 5vh;
    }
  }

  [data-name="Rocket"] {
    width: 35vmin;
    position: absolute;
    left: 20vw;
    bottom: -25vh;

    .start {
      fill: #09ffe1;
    }

    .second {
      fill: #00c9ca;

      path {
        fill: #00c9ca;
      }
    }

    .third {
      fill: #008fa4;

      path {
        fill: #008fa4;
      }
    }

    .end {
      fill: #006d84;
    }
  }
`;

export const AtmosphereSection = () => {
  const section = useRef();

  const thrust = useCallback(() => {
    const thrustTl = new TimelineMax({
      repeat: -1,
      ease: Power1.easeInOut,
    });

    thrustTl
      .fromTo(
        [".body.end", ".line", ".dot"],
        { autoAlpha: 0.2 },
        {
          autoAlpha: 1,
          transformOrigin: "top",
          duration: 1,
          yoyo: true,
          repeat: -1,
          stagger: 0.1,
          ease: Power1.easeInOut,
        }
      )
      .to(
        ".end.line",
        {
          y: 5,
          repeat: -1,
          stagger: 0.2,
          autoAlpha: 0,
          duration: 1,
          ease: Power1.easeInOut,
        },
        0
      );
  }, []);

  const rotateSatelite = useCallback(() => {
    const rotationTl = new TimelineMax({
      repeat: -1,
      ease: Power4.easeInOut,
    });

    rotationTl.timeScale(0.3);

    rotationTl
      .to(
        '[data-name="Satelite"] .wing.bottom',
        2,
        {
          scaleY: "0",
          y: -35,
          transformOrigin: "top",
          ease: Power1.easeInOut,
        },
        0
      )
      // might be a better way to do it in steps
      .to(
        '[data-name="Satelite"] .wing.bottom',
        {
          rotate: "180deg",
          transformOrigin: "50%",
          duration: 0,
        },
        1.9
      )
      .to(
        '[data-name="Satelite"] .wing.bottom',
        2,
        {
          scaleY: 1,
          y: -75,
          transformOrigin: "top",
          ease: Power1.easeInOut,
        },
        2.2
      )
      .to(
        '[data-name="Satelite"] .wing.top',
        2,
        {
          scaleY: "0",
          y: 35,
          transformOrigin: "bottom",
          ease: Power1.easeInOut,
        },
        0
      )
      .to(
        '[data-name="Satelite"] .wing.top',
        {
          rotate: "180deg",
          transformOrigin: "50%",
          ease: Power1.easeInOut,
        },
        1.9
      )
      .to(
        '[data-name="Satelite"] .wing.top',
        2,
        {
          scaleY: 1,
          y: 75,
          transformOrigin: "bottom",
          ease: Power1.easeInOut,
        },
        2.2
      );
  }, []);

  useEffect(() => {
    rotateSatelite();
    thrust();

    const tl = new TimelineMax({
      scrollTrigger: {
        id: "AtmosphereSection",
        trigger: section.current,
        start: "top center+=100",
        toggleActions: "play none none",
      },
    });

    tl.fromTo(
      '[data-name="Satelite"]',
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        x: -100,
      }
    ).fromTo(
      '[data-name="Rocket"]',
      { autoAlpha: 0 },
      {
        duration: 0.5,
        autoAlpha: 1,
        y: -100,
      }
    );
  }, [rotateSatelite, thrust]);

  return (
    <StyledAtmosphereSection ref={section}>
      <Satelite />
      <Rocket />
    </StyledAtmosphereSection>
  );
};
