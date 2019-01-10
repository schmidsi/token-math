import JSBI from "jsbi";
import BigInteger from "./BigInteger";

const modulo = (a: BigInteger, b: BigInteger): BigInteger =>
  new BigInteger(JSBI.remainder(a.value, b.value));

export default modulo;
