import React from "react";
import { useSelector } from "react-redux";
import BasicSection from "../components/BasicSection";
import BestAudioGear from "../components/BestAudioGear";
import Definer from "../components/Definer";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductsCategories from "../components/ProductsCategories";

const Earphones = () => {
  const allData = useSelector((state) => state.allData);
  const { loading, error, data } = allData;
  const earphones = data ? data.earphones : null;
  return (
    <div>
      <Definer title="EARPHONES" />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        earphones.map((earphone) => (
          <BasicSection
            key={earphone.id}
            name={earphone.headerName}
            info={earphone.info}
            mobile={earphone.mobile}
            tablet={earphone.tablet}
            desktop={earphone.desktop}
          />
        ))
      )}
      <ProductsCategories />
      <BestAudioGear />
    </div>
  );
};

export default Earphones;
