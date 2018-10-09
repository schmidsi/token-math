import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const add = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("add", a, b);

export default add;
