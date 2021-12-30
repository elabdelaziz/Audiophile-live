import React from "react";

const Definer = (props) => {
  return (
    <div className="bg-black w-full h-[50vh] flex justify-center items-end text-white pb-28 font-bold text-[2.5rem]">
      <div className="w-full text-center container mx-[1rem] lg:mx-[3rem] border-t-[1px] border-opacity-20 pt-12">
        {props.title}
      </div>
    </div>
  );
};

export default Definer;
