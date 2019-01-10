import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const multiply = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => new BigInteger(JSBI.multiply(a.value, b.value)));

export default multiply;
