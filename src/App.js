import React from "react";
import styled from "@emotion/styled";
import {
  SpaceSection,
  SkySection,
  AtmosphereSection,
  LandSection,
} from "sections";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#000120 10%, #024254, #008ea5, #7ee7ff 47%);
  overflow: hidden;
`;

const App = () => {
  return (
    <StyledApp>
      <SpaceSection />
      <AtmosphereSection />
      <SkySection />
      <LandSection />
    </StyledApp>
  );
};

export default App;
