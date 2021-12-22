import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { navData } from "./navData";
const NavElements = () => {
  return (
    <Fragment>
      {navData.map((item) => (
        <li key={item.name}>
          <Link to={item.route}>{item.name}</Link>
        </li>
      ))}
    </Fragment>
  );
};

export default NavElements;
