import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const multiply = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => bnCall.toBigInteger("mul", a, b));

export default multiply;
