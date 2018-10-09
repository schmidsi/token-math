import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const isZero = (a: BigInteger): boolean => bnCall.toBool("isZero", a);

export default isZero;
