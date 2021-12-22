import React from "react";
import Picture from "./Picture";

const BestAudioGear = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-around">
        <div className="overflow-hidden rounded-xl max-w-[327px] md:max-w-[689px]">
          <Picture
            desktopSrc="/assets/shared/desktop/image-best-gear.jpg"
            tabletSrc="/assets/shared/tablet/image-best-gear.jpg"
            mobileSrc="/assets/shared/mobile/image-best-gear.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center  max-w-xl lg:max-w-md">
          <h2 className="font-bold text-[2rem] text-center lg:text-left my-8">
            BRINGING YOU THE <span className="text-darkOrange">BEST</span> AUDIO
            GEAR
          </h2>
          <p className="text-center lg:text-left text-slate-600 ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestAudioGear;
