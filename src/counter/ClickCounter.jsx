import React from "react";
import withCounter from "../components/HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
