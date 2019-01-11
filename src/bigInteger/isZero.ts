import BigInteger from "./BigInteger";
import isEqual from "./isEqual";
import toBI from "./toBI";

const isZero = (a: BigInteger): boolean => isEqual(toBI(a), new BigInteger(0));

export default isZero;
