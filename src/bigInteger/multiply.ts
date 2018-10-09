import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const multiply = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("mul", a, b);

export default multiply;
