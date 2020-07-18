import React, { useEffect, useRef } from "react";
import { gsap, TimelineMax, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "@emotion/styled";
import {
  LargeCloud,
  SmallCloud,
  Cloud,
  Balloons,
  Parachutes,
} from "components";

gsap.registerPlugin(ScrollTrigger);

const StyledSkySection = styled.div`
  min-height: 80vh;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 80vh;
    opacity: 0.15;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: center;

    .row {
      height: 20vh;
      display: flex;
      flex-direction: row;

      width: 100%;
    }

    .Cloud {
      &:nth-child(2n) {
        padding-top: 30vh;
      }
      &:nth-child(4n) {
        padding-top: 45vh;
      }
    }
  }

  .foreground {
    position: relative;
    top: 10vh;
    height: 80vh;
    display: flex;
    align-items: start;

    .Cloud {
      /* This makes the position be more random */
      &:nth-child(2n) {
        padding-top: 10vh;
      }

      &:nth-child(4n) {
        padding-top: 15vh;
      }
    }
  }

  .Cloud {
    flex: 1;
    opacity: 0;
  }

  .Balloons {
    width: 50vmin;
    position: absolute;
    left: 15vmin;
    top: 25vmin;
    opacity: 0;
  }

  .Parachutes {
    position: absolute;
    right: 15vmin;
    bottom: 15vmin;
    height: 30vmin;
    opacity: 0;
  }
`;

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
  const section = useRef();

  // clouds
  useEffect(() => {
    const tl = new TimelineMax({
      scrollTrigger: {
        id: "SkySection",
        trigger: section.current,
        start: "top center",
        toggleActions: "play none none",
      },
    });

    tl.to(".background .Cloud", {
      x: -25,
      autoAlpha: 1,
      stagger: 0.01,
    })
      .to(
        ".foreground .Cloud",

        {
          x: 25,
          autoAlpha: 1,
          stagger: 0.01,
        }
      )
      .to(".Cloud", {
        x: 1,
        yoyo: true,
        repeat: -1,
        duration: 5,
      });
  }, []);

  // humans
  useEffect(() => {
    const tl = new TimelineMax({
      scrollTrigger: {
        id: "HumanSection",
        trigger: section.current,
        start: "top center",
        toggleActions: "play none none",
      },
    });

    tl.to(".Balloons", {
      x: 50,
      autoAlpha: 1,
      duration: 1,
    })
      .to(
        ".Parachutes",
        {
          x: -50,
          autoAlpha: 1,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        ".Balloons .secondary",
        {
          y: 8,
          x: 5,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          duration: 4,
        },

        "-=4"
      )
      .to(
        ".Balloons .main",
        {
          y: -8,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          duration: 4,
        },
        "-=4"
      )
      .to(
        ".Parachutes .secondary",
        {
          y: 10,
          rotate: "10deg",
          transformOrigin: "center",
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          duration: 8,
        },

        "-=4"
      )
      .to(
        ".Parachutes .main",
        {
          y: -20,
          x: 5,
          rotate: "-7deg",
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          duration: 8,
        },
        "-=6"
      );
  }, []);

  return (
    <StyledSkySection ref={section}>
      <Sky />
      <Balloons />
      <Parachutes />
    </StyledSkySection>
  );
};
