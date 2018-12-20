import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const add = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => bnCall.toBigInteger("add", a, b));

export default add;
