import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const divide = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => new BigInteger(JSBI.divide(a.value, b.value)));

export default divide;
