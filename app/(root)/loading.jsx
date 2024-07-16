import React from "react";
import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default loading;
