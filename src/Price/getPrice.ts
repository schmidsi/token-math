import getGreatestCommonDivisor from "../bigInteger/getGreatestCommonDivisor";
import divide from "../bigInteger/divide";
import Quantity from "quantity/Quantity";
import createQuantity from "../Quantity/createQuantity";
import Price from "./Price";

const getPrice = (base: Quantity, quote: Quantity): Price => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, divide(base.quantity, gcd)),
    quote: createQuantity(quote, divide(quote.quantity, gcd))
  };
};

export default getPrice;
