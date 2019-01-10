import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import isEqual from "./isEqual";

const isZero = (a: BigInteger): boolean => isEqual(a, new BigInteger(0));

export default isZero;
