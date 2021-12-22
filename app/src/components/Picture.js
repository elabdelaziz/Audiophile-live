import React from "react";

const Picture = ({ desktopSrc, tabletSrc, mobileSrc }) => {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopSrc}></source>
      <source media="(min-width: 768px)" srcSet={tabletSrc}></source>
      <img src={mobileSrc} alt="person listening to music"></img>
    </picture>
  );
};

export default Picture;
