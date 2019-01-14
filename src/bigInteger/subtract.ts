import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const subtract = (...a: ConvertableBigInteger[]): BigInteger =>
  a
    .map(toBI)
    .reduce(
      (carry, current) =>
        new BigInteger(JSBI.subtract(carry.value, current.value))
    );

export default subtract;
