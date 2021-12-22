import React, { Fragment } from "react";
import BestAudioGear from "../components/BestAudioGear";
import Button from "../components/Button";
import ProductsCategories from "../components/ProductsCategories";

const HomeScreen = (props) => {
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
      <section className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-bottom container mx-auto justify-items-center items-center bg-midOrange bg-pattern-circles lg:pattern-circles-position bg-no-repeat bg-[3rem_1rem] rounded-xl text-center lg:text-left py-[55px] lg:py-[20px] overflow-hidden">
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
      <section className="container mx-auto">
        <div
          // style={{
          //   backgroundImage: `url(/assets/home/desktop/image-speaker-zx7.jpg)`,
          // }}
          className="bg-cover bg-right bg-[url('../public/assets/home/desktop/image-speaker-zx7.jpg')] container mx-auto rounded-xl h-[22rem] lg:pl-[10rem] flex flex-col justify-center lg:items-start items-center"
        >
          <h2 className="text-[2rem]">ZX7 SPEAKER</h2>
          <Button
            additional="border border-black border-solid mt-4"
            background="bg-transparent"
            color="text-black"
          />
        </div>
      </section>
      <section className="">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-8 items-center mx-[1rem] overflow-hidden lg:max-h-[300px]">
          <div className="rounded-xl overflow-hidden lg:max-w-[523px] lg:max-h-[300px]">
            <img
              className=""
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt=""
            ></img>
          </div>
          <div className="flex flex-col w-full lg:w-[40%] pt-8 rounded-xl max-w-[540px] lg:m-0 items-center lg:items-start lg:p-0 lg:justify-center lg:pl-[2rem] justify-start h-[250px] lg:h-[300px] bg-nearWhite">
            <h2 className="text-[1rem] text-center lg:text-[1.5rem] font-bold">
              YX1 WIRELESS EARPHONES
            </h2>
            <Button
              additional="border border-black border-solid mt-4"
              background="bg-transparent"
              color="text-black"
            />
          </div>
        </div>
      </section>
      <BestAudioGear />
    </Fragment>
  );
};

export default HomeScreen;
