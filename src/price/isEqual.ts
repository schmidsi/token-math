import isEqualQuantity from "../quantity/isEqual";
import PriceInterface from "./PriceInterface";
import cancelDown from "./cancelDown";

const isEqual = (a: PriceInterface, b: PriceInterface): boolean => {
  const cancelledDownA = cancelDown(a);
  const cancelledDownB = cancelDown(b);
  const result =
    isEqualQuantity(cancelledDownA.base, cancelledDownB.base) &&
    isEqualQuantity(cancelledDownA.quote, cancelledDownB.quote);
  return result;
};

export default isEqual;
