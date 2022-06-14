import React from "react";
import Home from "./Home";
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import Training from "./training";
import Gallery from "./gallery";
import Shop from "./shop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="training" element={<Training />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
