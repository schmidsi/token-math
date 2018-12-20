import QuantityInterface from "../quantity/QuantityInterface";

import PriceInterface from "./PriceInterface";
import cancelDown from "./cancelDown";

/**
 * Gets the price of two quantites. Cancels down by default
 */
const createPrice = (
  base: QuantityInterface,
  quote: QuantityInterface,
  preventCancelDown: boolean = false
): PriceInterface => {
  const price = { base, quote };
  const result = preventCancelDown ? price : cancelDown(price);

  return result;
};

export default createPrice;
