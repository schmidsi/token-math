import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const divide = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("div", a, b);

export default divide;
