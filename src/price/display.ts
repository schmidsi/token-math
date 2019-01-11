import PriceInterface from "./PriceInterface";
import toFixed from "../quantity/toFixed";

const display = (price: PriceInterface) =>
  `${toFixed(price.base)}${price.base.token.symbol}/${toFixed(price.quote)}${
    price.quote.token.symbol
  }`;

export default display;
