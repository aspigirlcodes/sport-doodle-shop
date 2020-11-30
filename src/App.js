import React from "react"
import {Router} from "@reach/router"
import Home from "./Home"
import ByProduct from "./ByProduct"
import ByDesign from "./ByDesign"

function App() {
  return (
    <Router>
      <Home path="/" />
      <ByProduct path="product/:itemKey" />
      <ByDesign path="design/:designKey" />
    </Router>
  );
}

export default App;
