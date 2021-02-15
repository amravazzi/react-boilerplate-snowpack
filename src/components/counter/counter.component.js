import React, { useEffect } from "react";
import { useCounter } from "./counter.hook";
import { string, func } from "prop-types";
import { useTranslation } from "react-i18next";

function Counter({ initialState, onChange }) {
  const { count, increment, decrement } = useCounter(initialState);
    const { t } = useTranslation();

  useEffect(() => {
    onChange?.(count);
  }, [count, onChange]);

  return (
    <>
      <button id="decrement" onClick={decrement} aria-controls="count">
        { t("decrement") }
      </button>
      <output id="count" htmlFor="increment decrement">
        {count}
      </output>
      <button id="increment" onClick={increment} aria-controls="count">
        { t("increment") }
      </button>
    </>
  );
}

Counter.propTypes = {
  initialState: string,
  onChange: func,
};

export { Counter };
