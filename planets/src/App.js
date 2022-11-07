import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PlanetJSON from "../src/data.json";
import Navigation from "./Components/Navigation/Navigation";
import MobileMenu from "./Components/Mobile Menu/MobileMenu";
import PlanetDetails from "./Components/Planet Details/PlanetDetails";
import MobilePlanetContentToggle from "./Components/Mobile Planet Content Toggle/MobilePlanetContentToggle";
import ErrorPage from "./Components/Error Page/ErrorPage";

const App = () => {
  const [mobileMenuClass, setMobileMenuClass] = useState(
    "mobile-menu-container"
  );

  const [planetOverview, setPlanetOverview] = useState(true);
  const [planetStructure, setPlanetStructure] = useState(false);
  const [planetSurface, setPlanetSurface] = useState(false);

  const [planetSurfaceIMG, setPlanetSurfaceIMG] = useState(
    "planet-surface hide"
  );

  const planetNames = {
    mercury: PlanetJSON[0],
    venus: PlanetJSON[1],
    earth: PlanetJSON[2],
    mars: PlanetJSON[3],
    jupiter: PlanetJSON[4],
    saturn: PlanetJSON[5],
    uranus: PlanetJSON[6],
    neptune: PlanetJSON[7],
  };

  const [activePlanet, setActivePlanet] = useState(planetNames.mercury);

  return (
    <Router>
      <Navigation
        setMobileMenuClass={setMobileMenuClass}
        setActivePlanet={setActivePlanet}
        planetNames={planetNames}
      />
      <MobileMenu
        mobileMenuClass={mobileMenuClass}
        setActivePlanet={setActivePlanet}
        planetNames={planetNames}
      />
      <MobilePlanetContentToggle
        activePlanet={activePlanet}
        planetOverview={planetOverview}
        planetStructure={planetStructure}
        planetSurface={planetSurface}
        setPlanetOverview={setPlanetOverview}
        setPlanetStructure={setPlanetStructure}
        setPlanetSurface={setPlanetSurface}
      />
      <Routes>
        <Route
          path={activePlanet.name === "mercury" ? "/" : `/${activePlanet.name}`}
          element={
            <PlanetDetails
              planetOverview={planetOverview}
              setPlanetOverview={setPlanetOverview}
              planetStructure={planetStructure}
              setPlanetStructure={setPlanetStructure}
              planetSurface={planetSurface}
              setPlanetSurface={setPlanetSurface}
              activePlanet={activePlanet}
              setActivePlanet={setActivePlanet}
              planetSurfaceIMG={planetSurfaceIMG}
              setPlanetSurfaceIMG={setPlanetSurfaceIMG}
            />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
