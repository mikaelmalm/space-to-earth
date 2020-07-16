import React from "react";
import styled from "@emotion/styled";
import { Satelite, Rocket } from "components";

const StyledAtmosphereSection = styled.div`
  min-height: 40vh;
  position: relative;

  [data-name="Satelite"] {
    width: 20vmin;
    position: absolute;
    right: 15vw;
    top: 5vh;
  }

  [data-name="Rocket"] {
    width: 40vmin;
    position: absolute;
    left: 15vw;
    bottom: -5vh;
    transform: rotate(25deg);
  }
`;

export const AtmosphereSection = () => {
  return (
    <StyledAtmosphereSection>
      <Satelite />
      <Rocket />
    </StyledAtmosphereSection>
  );
};
