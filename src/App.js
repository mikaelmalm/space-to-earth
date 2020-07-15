import React from "react";
import "./App.scss";

import {
  SpaceSection,
  SkySection,
  AtmosphereSection,
  LandSection,
} from "sections";

function App() {
  // I modify-the order with flex-direction to reverse how Z-index work :)
  // Note: Might be not needed after background refactor
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
