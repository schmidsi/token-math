import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const isEqual = (a: BigInteger, b: BigInteger): boolean =>
  bnCall.toBool("eq", a, b);

export default isEqual;
