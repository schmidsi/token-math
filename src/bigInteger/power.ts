import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import absolute from "./absolute";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const power = (
  a: ConvertableBigInteger,
  b: ConvertableBigInteger
): BigInteger =>
  new BigInteger(JSBI.exponentiate(toBI(a).value, absolute(b).value));

export default power;
