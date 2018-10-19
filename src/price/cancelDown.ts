import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import divide from "../bigInteger/divide";
import createQuantity from "../quantity/createQuantity";
import PriceInterface from "./PriceInterface";

/**
 * Cancels down the quantities if possible.
 */
const cancelDown = (price: PriceInterface): PriceInterface => {
  const gcd = getGreatestCommonDivisor(
    price.base.quantity,
    price.quote.quantity
  );

  return {
    base: createQuantity(price.base.token, divide(price.base.quantity, gcd)),
    quote: createQuantity(price.quote.token, divide(price.quote.quantity, gcd))
  };
};

export default cancelDown;
