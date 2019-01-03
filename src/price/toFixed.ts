import PriceInterface from "./PriceInterface";
import normalize from "./normalize";
import { default as toFixedQuantity } from "../quantity/toFixed";

const toFixed = (price: PriceInterface, decimals: number = 6): string =>
  toFixedQuantity(normalize(price).quote, decimals);
// (
//   (parseFloat(price.quote.quantity.toString()) /
//     parseFloat(price.base.quantity.toString())) *
//   10 ** (price.base.token.decimals - price.quote.token.decimals)
// ).toFixed(decimals);

export default toFixed;
