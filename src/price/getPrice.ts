import QuantityInterface from "../quantity/QuantityInterface";

import PriceInterface from "./PriceInterface";
import createPrice from "./createPrice";

const getPrice = (
  base: QuantityInterface,
  quote: QuantityInterface,
  preventCancelDown?: boolean
): PriceInterface => {
  console.warn("DEPRECATED. Please use createPrice instead.");
  return createPrice(base, quote);
};

export default getPrice;
