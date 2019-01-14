import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const multiply = (
  a: ConvertableBigInteger,
  ...b: ConvertableBigInteger[]
): BigInteger =>
  b
    .map(toBI)
    .reduce(
      (carry, current) =>
        new BigInteger(JSBI.multiply(carry.value, current.value)),
      toBI(a)
    );

export default multiply;
