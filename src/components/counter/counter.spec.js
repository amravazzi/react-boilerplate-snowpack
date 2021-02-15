import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Counter } from "./counter.component";

let container;
let button;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<Counter />, container);
  });
  button = container.querySelector("button");
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders", () => {
  expect(button).toBeTruthy();
});
