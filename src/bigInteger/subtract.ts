import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";

const subtract = (...a: BigInteger[]): BigInteger =>
  a.map(toBI).reduce(
    (carry, current) => new BigInteger(JSBI.subtract(carry.value, current.value)),
  );

export default subtract;
