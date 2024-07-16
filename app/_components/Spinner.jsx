import React from "react";

function Spinner({ size }) {
  return (
    <span className={`loading loading-dots loading-${size} loading-lg`}></span>
  );
}

export default Spinner;
