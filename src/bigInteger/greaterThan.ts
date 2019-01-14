import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const greaterThan = (
  a: ConvertableBigInteger,
  b: ConvertableBigInteger
): boolean => JSBI.greaterThan(toBI(a).value, toBI(b).value);

export default greaterThan;
