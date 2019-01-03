import QuantityInterface from "../quantity/QuantityInterface";

import PriceInterface from "./PriceInterface";

/**
 * Gets the price of two quantites.
 */
const createPrice = (
  base: QuantityInterface,
  quote: QuantityInterface
): PriceInterface => {
  const price = { base, quote };

  return price;
};

export default createPrice;
