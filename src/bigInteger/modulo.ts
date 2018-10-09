import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const modulo = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("mod", a, b);

export default modulo;
