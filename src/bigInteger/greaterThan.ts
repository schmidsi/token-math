import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const greaterThan = (a: BigInteger, b: BigInteger): boolean =>
  JSBI.greaterThan(a.value, b.value);

export default greaterThan;
