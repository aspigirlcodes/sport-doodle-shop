import React from "react"
import {Router} from "@reach/router"
import Home from "./Home"
import ByProduct from "./ByProduct"
import ByDesign from "./ByDesign"
import ProductConfigurator from "./ProductConfigurator"

function App() {
  return (
    <Router>
      <Home path="/" />
      <ByProduct path="product/:itemKey" />
      <ByDesign path="design/:designKey" />
      <ProductConfigurator path="configurator" />
    </Router>
  );
}

export default App;
