import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const subtract = (...bigints: BigInteger[]): BigInteger =>
  bigints.reduce((a, b) => new BigInteger(JSBI.subtract(a.value, b.value)));

export default subtract;
