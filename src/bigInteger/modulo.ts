import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";

const modulo = (a: BigInteger, b: BigInteger): BigInteger =>
  new BigInteger(JSBI.remainder(toBI(a).value, toBI(b).value));

export default modulo;
