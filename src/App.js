import React, { useState } from "react"
import {Router} from "@reach/router"
import Home from "./Home"
import ByProduct from "./ByProduct"
import ByDesign from "./ByDesign"
import ProductConfigurator from "./ProductConfigurator"
import { BasketContext, useBasket } from "./BasketContext"
import Basket from "./Basket"


function App() {
  const context = useBasket()

  return (
    <BasketContext.Provider value={context}>
    <Router>
      <Home path="/" />
      <ByProduct path="product/:itemKey" />
      <ByDesign path="design/:designKey" />
      <ProductConfigurator path="configurator" />
      <Basket path="basket"/>
    </Router>
    </BasketContext.Provider>
  );
}



export default App;
