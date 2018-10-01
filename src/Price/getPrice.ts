import getGreatestCommonDivisor from "../BigInt/getGreatestCommonDivisor";
import QuantityInterface from "../Quantity/QuantityInterface";
import createQuantity from "../Quantity/createQuantity";
import PriceInterface from "./PriceInterface";

const getPrice = (
  base: QuantityInterface,
  quote: QuantityInterface
): PriceInterface => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, base.quantity / gcd),
    quote: createQuantity(quote, quote.quantity / gcd)
  };
};

export default getPrice;
