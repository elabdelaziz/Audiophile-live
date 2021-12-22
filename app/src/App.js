import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { welcomeAction } from "./actions/welcomeAction";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import HomeScreen from "./screens/HomeScreen";
import NavElements from "./components/nav/NavElements";
import Headphones from "./screens/Headphones";
import Speakers from "./screens/Speakers";
import Earphones from "./screens/Earphones";
import { listAllData } from "./actions/shared";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(welcomeAction());
    dispatch(listAllData);
  }, [dispatch]);
  const allData = useSelector((state) => state.allData);
  console.log(allData);
  return (
    <div className="">
      <Router>
        <header className="absolute w-full z-20 text-white">
          <nav className="flex items-center justify-between md:justify-around py-8 container mx-auto text-sm font-medium">
            <Link to="/">
              <img
                className="w-20 md:w-40 md:text-xl"
                src="/assets/shared/desktop/logo.svg"
                alt=""
              ></img>
            </Link>
            <ul className="uppercase md:flex gap-10 mx-auto hidden md:visible">
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
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphones />} />
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
