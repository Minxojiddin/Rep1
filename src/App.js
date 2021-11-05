import React from "react";
import DataCom from "./Componont/DataCom/DataCom";
import NavbarCom from "./Componont/NavbarCom/NavbarCom";
import {Switch, Route, Router} from "react-router-dom";
import ProductCom from "./Componont/ProductCom/ProductCom";

function App() {
  return (
    <div className="App">
            <NavbarCom/>
            <Switch>
                <Route exact path="/">
                    <DataCom/>
                </Route>
                <Route path="/product">
                    <ProductCom/>
                </Route>
            </Switch>
    </div>
  );
}

export default App;
