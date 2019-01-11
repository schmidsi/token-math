import TokenInterface from "../token/TokenInterface";
import isToken from "../token/isToken";
import { default as displayToken } from "../token/display";

// import QuantityInterface from "../quantity/QuantityInterface";
// import isQuantity from "../quantity/isQuantity";
// import { default as displayQuantity } from "../quantity/display";

import PriceInterface from "../price/PriceInterface";
import isPrice from "../price/isPrice";
import { default as displayPrice } from "../price/display";

export type Display = {
  (value: TokenInterface | PriceInterface): string;
};

const display: Display = value => {
  if (isToken(value)) {
    return displayToken(value);
  }

  if (isPrice(value)) {
    return displayPrice(value);
  }

  throw new TypeError(`"display" not implemented for ${typeof value}`);
};

export default display;
