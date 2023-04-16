import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { welcomeAction } from "./actions/welcomeAction";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import HomeScreen from "./screens/HomeScreen";
import NavElements from "./components/nav/NavElements";
import Headphones from "./screens/Headphones";
import Speakers from "./screens/Speakers";
import Earphones from "./screens/Earphones";
import { listAllData } from "./actions/shared";
import ProductPage from "./screens/ProductPage";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductsCategories from "./components/ProductsCategories";

import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  const [isClicked, changeClicked] = useState(false);
  const handleNavDisplay = () => {
    changeClicked(!isClicked);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(welcomeAction());
    dispatch(listAllData);
  }, [dispatch]);

  return (
    <div className="">
      <Router>
        <header className="absolute w-full z-20 text-white md:px-[4rem] bg-[#191919]">
          <nav className="flex items-center justify-between md:px-0 py-8 container mx-auto text-sm font-medium border-b-[1px] border-opacity-20">
            <button
              onClick={handleNavDisplay}
              className={`${
                isClicked ? "hidden" : "block"
              } text-[20px] lg:hidden`}
            >
              <GiHamburgerMenu />
            </button>
            <button
              onClick={handleNavDisplay}
              className={`${isClicked ? "block" : "hidden"} text-[20px]`}
            >
              <AiFillCloseCircle />
            </button>
            <div
              className={`${
                isClicked ? "block" : "hidden"
              } w-[100%] duration-300 absolute block left-0 top-24 bg-white text-black rounded-xl `}
            >
              <ProductsCategories changeClicked={changeClicked} />
            </div>
            <Link to="/">
              <img
                className="w-20 md:w-40 md:text-xl"
                src="/assets/shared/desktop/logo.svg"
                alt=""
              ></img>
            </Link>
            <ul className="uppercase lg:flex gap-10 mx-auto hidden">
              <NavElements />
            </ul>
            <div className="flex gap-4 items-center space-x-2 md:text-lg justify-between">
              <button>
                <i>
                  <FiShoppingCart className=" fill-white hover:fill-darkOrange" />
                </i>
              </button>
              <button>
                <i>
                  <FaUser className=" fill-white hover:fill-darkOrange" />
                </i>
              </button>
            </div>
          </nav>
          <div
            className={`${
              isClicked ? "block" : "hidden"
            } w-[100vw] fixed h-[100vh] top-0 bg-black -z-10 opacity-40 `}
          ></div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <footer className="bg-black text-center md:text-left md:px-8 md:py-12 w-full mb-0 mt-8 clear-both left-0 bottom-0 right-0">
          <div className="flex flex-col items-center md:items-start lg:flex-row justify-between">
            <div className="">
              <img
                className="w-30 my-8 md:w-40 md:text-xl lg:my-0"
                src="/assets/shared/desktop/logo.svg"
                alt=""
              ></img>
            </div>
            <ul className="text-white text-sm tracking-[2px] md:flex gap-4 items-center space-y-4 md:space-y-0">
              <NavElements />
            </ul>
          </div>

          <p className="text-stone-500 my-4 mx-auto md:mx-0 px-4 md:px-0 md:py-8 max-w-[500px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <div className="md:flex justify-between">
            <h2 className="pb-4 text-stone-500">
              Copyright 2021. All Rights Reserved
            </h2>
            <div className="flex justify-center gap-4 pb-4">
              <img src="/assets/shared/desktop/icon-facebook.svg" alt=""></img>
              <img src="/assets/shared/desktop/icon-twitter.svg" alt=""></img>
              <img src="/assets/shared/desktop/icon-instagram.svg" alt=""></img>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
