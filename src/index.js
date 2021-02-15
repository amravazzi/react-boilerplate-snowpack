import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./locales/i18n";
import { Counter } from "./components/counter";
import { Home } from "./views/Home";
import { Locales } from "./views/Locales";

function App() {
  return (
    <StrictMode>
      <Locales />
      <Home />
      <Counter />
    </StrictMode>
  );
}

const root = document.getElementById("root");

render(<App />, root);
