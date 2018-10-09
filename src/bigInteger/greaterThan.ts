import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const greaterThan = (a: BigInteger, b: BigInteger): boolean =>
  bnCall.toBool("gt", a, b);

export default greaterThan;
