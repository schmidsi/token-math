import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const isEqual = (a: BigInteger, b: BigInteger): boolean =>
  JSBI.equal(a.value, b.value);

export default isEqual;
