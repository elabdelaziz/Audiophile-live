import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/categoriesActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

const ProductsCategories = (props) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  console.log(categories);
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="px-3 sm:px-10 flex flex-col md: justify-around md:flex-row md:space-x-4 lg:space-x-8 my-[100px] lg:my-[200px]">
          {categories.map((category, id) => (
            <div
              key={id}
              className="flex h-40 flex-col justify-end my-8 md:my-0 items-center bg-slate-100 rounded-lg relative mt-14 w-full "
            >
              <img
                className="w-[150px] absolute top-[-50px]"
                src={`${category.image}`}
                alt=""
              ></img>
              <h3 className="font-bold">{category.name}</h3>
              <button className="m-4 text-gray-500 font-semibold text-sm button-three ">
                SHOP
              </button>
            </div>
          ))}
        </div>
      )}
    </Fragment>

    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <div>hi</div>
    //   )
    /* {categories.map((category) => (
        <div>
          <img src={`${category.image}`} alt=""></img>
          <h3>{category.name}</h3>
          <p>SHOP</p>
        </div>
      ))} */
  );
};

export default ProductsCategories;
