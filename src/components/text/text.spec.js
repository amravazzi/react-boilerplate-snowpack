import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Text } from "./text.component";

let container;
let text;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<Text />, container);
  });
  text = container.querySelector("p");
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders", () => {
  expect(text).toBeTruthy();
});
