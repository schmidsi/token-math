import PriceInterface from "./PriceInterface";
import normalize from "./normalize";
import { default as toFixedQuantity } from "../quantity/toFixed";

const toFixed = (price: PriceInterface, decimals: number = 6): string =>
  toFixedQuantity(normalize(price).quote, decimals);

export default toFixed;
