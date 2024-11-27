import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="animate-spin">
        <ImSpinner8 size={32} />
      </div>
    </div>
  );
};

export default Loader;
