import React from "react";
import { string, object } from "prop-types";

function Text({ children, ...rest }) {
  return (
    <>
      <h1 {...rest}>{children}</h1>
    </>
  );
}

Text.propTypes = {
  children: string.isRequired,
  rest: object,
};

export { Text };
