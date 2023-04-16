import { PRODUCT_DETAILS_SUCCESS } from "../constants/productDetails";
import { products } from "../data";

export const detailsProduct = (productId) => async (dispatch) => {
  const productKey = Object.keys(products).find((key) => key === productId);
  const product = products[productKey];
  if (product) {
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: product });
  }
};
