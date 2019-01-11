import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from './toBI';

const isEqual = (a: BigInteger, b: BigInteger): boolean =>
  JSBI.equal(toBI(a).value, toBI(b).value);

export default isEqual;
