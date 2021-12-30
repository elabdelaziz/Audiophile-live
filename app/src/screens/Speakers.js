import React from "react";
import { useSelector } from "react-redux";
import BasicSection from "../components/BasicSection";
import BestAudioGear from "../components/BestAudioGear";
import Definer from "../components/Definer";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductsCategories from "../components/ProductsCategories";

const Speakers = () => {
  const allData = useSelector((state) => state.allData);
  const { loading, error, data } = allData;
  const speakers = data ? data.speakers : null;
  return (
    <div>
      <Definer title="SPEAKERS" />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        speakers.map((speaker) => (
          <BasicSection
            key={speaker.id}
            name={speaker.headerName}
            info={speaker.info}
            mobile={speaker.mobile}
            tablet={speaker.tablet}
            desktop={speaker.desktop}
          />
        ))
      )}
      <ProductsCategories />
      <BestAudioGear />
    </div>
  );
};

export default Speakers;
