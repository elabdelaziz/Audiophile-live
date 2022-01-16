import React, { Fragment, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Picture from "../components/Picture";
import { useLocation } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductsCategories from "../components/ProductsCategories";
import BestAudioGear from "../components/BestAudioGear";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.slice(10);
  const dispatch = useDispatch();
  let [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.product);
  const { loading, error, product } = productDetails ? productDetails : null;
  const images = product ? product.images : null;

  useLayoutEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  // const addToCartHandler = () => {
  //   props.history.push(`/cart/${productId}?qty=${qty}`);
  // };

  return (
    <Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Fragment>
          <div className="pt-[8rem] container mb-6 lg:mb-8 lg:mx-[6rem]">
            <button className="opacity-70" onClick={() => navigate(-1)}>
              GoBack
            </button>
          </div>

          <div className="container  mx-auto flex flex-col lg:flex-row items-center lg:justify-around reverser">
            <div className="overflow-hidden rounded-xl max-w-[327px] md:max-w-[540px]">
              <Picture
                desktopSrc={images.headerImg.desktop}
                tabletSrc={images.headerImg.tablet}
                mobileSrc={images.headerImg.mobile}
              />
            </div>
            <div
              className={`
        flex flex-col lg:items-start items-center  max-w-xl lg:max-w-md text-left`}
            >
              <h1 className="font-bold text-[2rem] text-center lg:text-left my-8">
                {product.name}
              </h1>
              <p className="text-center lg:text-left mb-8 text-slate-600">
                {product.description}
              </p>
              <span className="font-bold text-[1.5rem] mb-8 inline-block">{`$${product.price}`}</span>
              <div className="flex gap-x-4">
                <div className="w-[120px]">
                  <div className="number-input font-semibold">
                    <button
                      onClick={(e) => (qty >= 2 ? setQty((qty -= 1)) : qty)}
                    >
                      -
                    </button>
                    <span>{qty}</span>
                    <button onClick={(e) => setQty((qty += 1))}>+</button>
                  </div>
                </div>
                <button
                  className={`p-2 h-12 w-40 text-sm md:text-md uppercase leading-5 tracking-wider font-semibold tracking-[2px] bg-darkOrange text-white`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-20 md:mt-[96px] lg:mt-[140px] lg:flex lg:flex-row lg:justify-center lg:space-x-32 ">
            <div className="mb-8 lg:max-w-[50%]">
              <h2 className="font-bold text-[1.5rem] mb-4">FEATURES</h2>
              <p className="max-w-4">{product.features}</p>
            </div>
            <div className="leading-10">
              <h2 className="font-bold text-[1.5rem] mb-4">IN THE BOX</h2>
              <ul>
                {product.inTheBox.map((item) => (
                  <li key={item} className="space-x-4">
                    <span className="text-darkOrange font-semibold">
                      {item.slice(0, 2)}
                    </span>
                    <span className="font-semibold">{item.slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-20 md:flex md:space-x-[20px] lg:justify-center lg:space-x-8 ">
            <div className="md:flex md:flex-col overflow-hidden mb-[20px] md:mb-0 justify-between">
              <div className="rounded-xl overflow-hidden mb-[20px]">
                <Picture
                  desktopSrc={images.gallery.desktop.small[0]}
                  tabletSrc={images.gallery.tablet.small[0]}
                  mobileSrc={images.gallery.mobile.small[0]}
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Picture
                  desktopSrc={images.gallery.desktop.small[1]}
                  tabletSrc={images.gallery.tablet.small[1]}
                  mobileSrc={images.gallery.mobile.small[1]}
                />
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
                <Picture
                  desktopSrc={images.gallery.desktop.large}
                  tabletSrc={images.gallery.tablet.large}
                  mobileSrc={images.gallery.mobile.large}
                />
              </div>
            </div>
          </div>
          <ProductsCategories />
          <BestAudioGear />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductPage;
