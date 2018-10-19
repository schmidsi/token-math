import PriceInterface from "./PriceInterface";

const toFixed = (price: PriceInterface, decimals: number = 6): string =>
  (
    (parseFloat(price.quote.quantity.toString()) /
      parseFloat(price.base.quantity.toString())) *
    10 ** (price.base.token.decimals - price.quote.token.decimals)
  ).toFixed(decimals);

export default toFixed;
