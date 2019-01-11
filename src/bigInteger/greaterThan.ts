import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from './toBI';

const greaterThan = (a: BigInteger, b: BigInteger): boolean =>
  JSBI.greaterThan(toBI(a).value, toBI(b).value);

export default greaterThan;
