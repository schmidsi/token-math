import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const power = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("pow", a, b);

export default power;
