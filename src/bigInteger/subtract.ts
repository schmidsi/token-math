import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const subtract = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => bnCall.toBigInteger("sub", a, b));

export default subtract;
