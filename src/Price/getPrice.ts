import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import divide from "../bigInteger/divide";
import IQuantity from "quantity/IQuantity";
import createQuantity from "../Quantity/createQuantity";
import IPrice from "./IPrice";

const getPrice = (base: IQuantity, quote: IQuantity): IPrice => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, divide(base.quantity, gcd)),
    quote: createQuantity(quote, divide(quote.quantity, gcd))
  };
};

export default getPrice;
