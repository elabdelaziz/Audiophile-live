import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listheadphones } from "../actions/headphonesActions";
import BasicSection from "../components/BasicSection";
import Definer from "../components/Definer";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductsCategories from "../components/ProductsCategories";
import BestAudioGear from "../components/BestAudioGear";
// import {allData} from '../App'

const Headphones = (props) => {
  const dispatch = useDispatch();
  const headphonesList = useSelector((state) => state.headphonesList);

  // const allDatahead = useSelector((state) => state.allData.data.headphones);
  // allDatahead ? console.log(allDatahead) : console.log("noneee");
  const { loading, error, headphones } = headphonesList;
  console.log(headphonesList);
  useEffect(() => {
    dispatch(listheadphones());
  }, [dispatch]);
  return (
    <div>
      <Definer title="HEADPHONES" />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        headphones.map((headphone) => (
          <BasicSection
            key={headphone.id}
            name={headphone.headerName}
            info={headphone.info}
            mobile={headphone.mobile}
            tablet={headphone.tablet}
            desktop={headphone.desktop}
          />
        ))
      )}
      <ProductsCategories />
      <BestAudioGear />
    </div>
  );
};

export default Headphones;
