import React from "react";
import styled from "@emotion/styled";
import {
  LargeCloud,
  SmallCloud,
  Cloud,
  Balloons,
  Parachutes,
} from "components";

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
  }

  .Balloons {
    width: 50vmin;
    position: absolute;
    left: 15vmin;
    top: 25vmin;
  }

  .Parachutes {
    position: absolute;
    right: 15vmin;
    bottom: 15vmin;

    height: 30vmin;
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
  return (
    <StyledSkySection>
      <Sky />
      <Balloons />
      <Parachutes />
    </StyledSkySection>
  );
};
