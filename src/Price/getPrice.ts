import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import divide from "../bigInteger/divide";
import IQuantity from "quantity/IQuantity";
import createQuantity from "../Quantity/createQuantity";
import IPrice from "./IPrice";

/**
 * Gets the price from a given base and quote quantity.
 * It also cancels down the quantities if possible.
 */
const getPrice = (base: IQuantity, quote: IQuantity): IPrice => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, divide(base.quantity, gcd)),
    quote: createQuantity(quote, divide(quote.quantity, gcd))
  };
};

export default getPrice;
