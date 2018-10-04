import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import Quantity from "quantity/Quantity";
import createQuantity from "../Quantity/createQuantity";
import Price from "./Price";

const getPrice = (base: Quantity, quote: Quantity): Price => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, base.quantity / gcd),
    quote: createQuantity(quote, quote.quantity / gcd)
  };
};

export default getPrice;
