import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const add = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => new BigInteger(JSBI.add(a.value, b.value)));

export default add;
