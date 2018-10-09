import IPrice from "./IPrice";

const toFixed = (price: IPrice, decimals: number = 6): string =>
  (
    (parseFloat(price.quote.quantity.toString()) /
      parseFloat(price.base.quantity.toString())) *
    10 ** (price.base.decimals - price.quote.decimals)
  ).toFixed(decimals);

export default toFixed;
