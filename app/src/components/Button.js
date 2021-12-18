import React from "react";

const Button = (props) => {
  const { word, background, color, additional } = props;
  return (
    <button
      className={`p-2 h-12 w-40 text-sm md:text-md uppercase leading-5 tracking-wider font-semibold tracking-[2px] ${background} ${color} ${additional}`}
    >
      SEE PRODUCT
    </button>
  );
};

export default Button;
