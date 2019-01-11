import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import absolute from "./absolute";
import toBI from "./toBI";

const power = (a: BigInteger, b: BigInteger): BigInteger =>
  new BigInteger(JSBI.exponentiate(toBI(a).value, absolute(b).value));

export default power;
