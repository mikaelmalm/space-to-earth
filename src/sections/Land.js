import React, { useRef, useEffect } from "react";
import { gsap, TimelineMax, Power1 } from "gsap";
import styled from "@emotion/styled";
import { Mountains, Wall, Trees, Grass, Waterfall, Water } from "components";

const StyledLandSection = styled.div`
  position: relative;
  width: 100vw;

  overflow: hidden;

  .bottom {
    position: relative;
    height: 50vh;

    @media (min-width: 920px) {
      height: 100vh;
      top: -1vh;
    }

    .Wall {
      z-index: 1;
      width: 100vw;
      height: 50vh;

      @media (min-width: 920px) {
        height: 100vmax;
        width: 100%;
      }
    }

    .Trees {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100vw;
      height: 50vh;
      z-index: 2;

      .left {
        left: -35vw;

        @media (min-width: 480px) {
          left: -15vw;
        }

        @media (min-width: 920px) {
          left: 0;
        }
      }

      .right {
        right: -35vw;

        @media (min-width: 480px) {
          right: -15vw;
        }

        @media (min-width: 920px) {
          right: 0;
        }
      }

      @media (min-width: 920px) {
        bottom: -1vmin;
      }
    }

    .Waterfall {
      position: absolute;
      top: 2vmin;
      left: 0;
      width: 100vw;
      height: 50vh;

      z-index: 2;

      @media (min-width: 920px) {
        height: 100vmax;
        width: 100%;
      }
    }

    .Grass {
      position: absolute;
      bottom: 0;

      left: 0;
      width: 130%;
      height: auto;
      z-index: 3;

      @media (min-width: 920px) {
        bottom: -1vmin;
      }
    }
  }
`;

export const LandSection = () => {
  const mountainSection = useRef();
  const bottomSection = useRef();

  // water
  useEffect(() => {
    gsap.to(".bubble", {
      x: 7,
      y: -10,
      yoyo: true,
      stagger: 0.2,
      duration: 10,
      ease: Power1.easeInOut,
      repeat: -1,
    });
  }, []);

  // mountains
  useEffect(() => {
    const tl = new TimelineMax({
      scrollTrigger: {
        id: "MountainSection",
        trigger: mountainSection.current,
        start: "top center",
        toggleActions: "play none none",
      },
    });

    tl.from([".Mountains .leaves", ".Mountains .bush", ".Mountains .branch"], {
      y: 15,
      autoAlpha: 0,
      ease: Power1.easeInOut,
    });
  }, []);

  // bottom
  useEffect(() => {
    const tl = new TimelineMax({
      scrollTrigger: {
        id: "BottomSection",
        trigger: bottomSection.current,
        start: "top center-=100",
        toggleActions: "play none none",
      },
    });

    tl.from([".Tree .leaves"], {
      x: -5,
      autoAlpha: 0,
      ease: Power1.easeInOut,
    });
  }, []);
  return (
    <StyledLandSection>
      <Mountains ref={mountainSection} />

      <div className="bottom" ref={bottomSection}>
        <Wall />
        <Waterfall />
        <Trees />
        <Grass />
      </div>

      <Water />
    </StyledLandSection>
  );
};
