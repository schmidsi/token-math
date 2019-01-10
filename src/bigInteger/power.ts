import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import absolute from "./absolute";

const power = (a: BigInteger, b: BigInteger): BigInteger =>
  new BigInteger(JSBI.exponentiate(a.value, absolute(b).value));

export default power;
