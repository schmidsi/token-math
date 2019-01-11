import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as toFixedQuantity } from "../quantity/toFixed";

import PriceInterface from "../price/PriceInterface";
import isPrice from "../price/isPrice";
import { default as toFixedPrice } from "../price/toFixed";

export type ToFixed = {
  (value: QuantityInterface | PriceInterface, decimals?: number): string;
};

const toFixed: ToFixed = (value, decimals) => {
  if (isQuantity(value)) {
    return toFixedQuantity(value, decimals);
  }

  if (isPrice(value)) {
    return toFixedPrice(value, decimals);
  }

  throw new TypeError(`"toFixed" not implemented for ${typeof value}`);
};

export default toFixed;
