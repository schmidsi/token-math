import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import divide from "../bigInteger/divide";
import createQuantity from "../Quantity/createQuantity";
import IPrice from "./IPrice";

/**
 * Cancels down the quantities if possible.
 */
const cancelDown = (price: IPrice): IPrice => {
  const gcd = getGreatestCommonDivisor(
    price.base.quantity,
    price.quote.quantity
  );

  return {
    base: createQuantity(price.base, divide(price.base.quantity, gcd)),
    quote: createQuantity(price.quote, divide(price.quote.quantity, gcd))
  };
};

export default cancelDown;
