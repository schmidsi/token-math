import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const divide = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => bnCall.toBigInteger("div", a, b));

export default divide;
