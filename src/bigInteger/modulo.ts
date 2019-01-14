import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const modulo = (
  a: ConvertableBigInteger,
  b: ConvertableBigInteger
): BigInteger => new BigInteger(JSBI.remainder(toBI(a).value, toBI(b).value));

export default modulo;
