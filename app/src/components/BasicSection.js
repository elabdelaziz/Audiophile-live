import React from "react";
import Picture from "./Picture";
import Button from "./Button";
import { Link } from "react-router-dom";

const BasicSection = ({
  name,
  route,
  info,
  mobile,
  tablet,
  desktop,
  isreversed,
}) => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row-reverse items-center lg:justify-around reverser">
      <div
        className={`${
          isreversed ? "order-2" : "order-1"
        } flex flex-col lg:items-start items-center  max-w-xl lg:max-w-md text-left`}
      >
        <h1 className="font-bold text-[2rem] text-center lg:text-left my-8">
          {name}
        </h1>
        <p className="text-center lg:text-left mb-8 text-slate-600">{info}</p>
        <Link to={`/products/${route}`}>
          <Button background="bg-darkOrange" color="text-white" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl max-w-[327px] md:max-w-[540px]">
        <Picture desktopSrc={desktop} tabletSrc={tablet} mobileSrc={mobile} />
      </div>
    </section>
  );
};

export default BasicSection;
