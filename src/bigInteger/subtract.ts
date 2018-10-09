import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const subtract = (a: BigInteger, b: BigInteger): BigInteger =>
  bnCall.toBigInteger("sub", a, b);

export default subtract;
