import React, { Fragment } from "react";
import Button from "../components/Button";
import ProductsCategories from "../components/ProductsCategories";

const HomeScreen = (props) => {
  console.log(process.env);
  return (
    <Fragment>
      <div className="bg-black text-white">
        <div className="min-h-screen bg-home-hero-mobile md:bg-home-hero-desktop  bg-no-repeat bg-center bg-cover grid content-center align-center grid-cols-1 p-2 mx-auto bg-home-header-mobile md:grid-cols-2 items-center">
          <div className="text-center md:mx-auto md:max-w-sm md:text-left">
            <h5 className="overline-text inline-block mb-4 md:mb-6 text-stone-300 text-lg tracking-custom1">
              NEW PRODUCT
            </h5>
            <h2 className="h2 md:h1 mb-6 md:text-xl">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="mb-[28px] md:mb-10 text-xs md:text-base text-stone-500">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button background="bg-darkOrange" color="text-white" />
          </div>
          {/* <div className=""></div> */}
        </div>
      </div>
      <ProductsCategories />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-bottom container mx-auto justify-items-center items-center bg-midOrange bg-pattern-circles lg:pattern-circles-position bg-no-repeat bg-[3rem_1rem] rounded-xl text-center lg:text-left py-[55px] lg:py-[20px] mb-6 md:mb-8 lg:mb-12 overflow-hidden">
          <div className="">
            <img
              className=" max-w-[180px] md:max-w-[197px] lg:max-w-[390px] lg:ml-[120px] mb-8 md:mb-16 transform lg:translate-y-24 "
              src="assets/home/desktop/image-speaker-zx9.png"
              alt=""
            ></img>
          </div>
          <div className="md:max-w-[350px] font-[700] text-slate-200">
            <h1 className="h2 md:h1 mb-6 md:text-[3rem]">ZX9 SPEAKER</h1>
            <p className="my-10 font-[400]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button background="bg-black" color="text-white" />
          </div>
        </div>
      </section>
      <section>
        <div
          // style={{
          //   backgroundImage: `url(/assets/home/desktop/image-speaker-zx7.jpg)`,
          // }}
          className="bg-cover bg-right container mx-auto rounded-xl h-[22rem] lg:pl-[10rem] flex flex-col justify-center lg:items-start items-center"
        >
          <h2 className="text-[2rem]">ZX7 SPEAKER</h2>
          <Button
            additional="border border-black border-solid mt-4"
            background="bg-transparent"
            color="text-black"
          />
        </div>
      </section>
      {/* <section>
        <div>
          <div>
            <img src="/assets/home/desktop/" alt=""></img>
          </div>
          <div></div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default HomeScreen;
