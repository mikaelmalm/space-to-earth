import React from "react";
import "./App.scss";

import {
  SpaceSection,
  SkySection,
  AtmosphereSection,
  LandSection,
} from "sections";

function App() {
  return (
    <div className="App">
      <SpaceSection />
      <AtmosphereSection />
      <SkySection />
      <LandSection />
    </div>
  );
}

export default App;
