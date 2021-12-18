import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { welcomeAction } from "./actions/welcomeAction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(welcomeAction());
  }, [dispatch]);
  // const welcomeMessage = useSelector((state) => state.welcome);
  return (
    <div>
      <Router>
        <header className="absolute w-full z-20 text-white">
          <nav className="flex items-center justify-between md:justify-around py-8 container mx-auto text-sm font-medium">
            <a href="#">
              <img
                className="w-20 md:w-40 md:text-xl"
                src="/assets/shared/desktop/logo.svg"
                alt=""
              ></img>
            </a>
            <ul className="uppercase md:flex gap-10 mx-auto hidden md:visible">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
              <li>
                <a href="#">Earphones</a>
              </li>
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
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
