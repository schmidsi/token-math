import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import greaterThan from "./greaterThan";

const absolute = (a: BigInteger): BigInteger =>
  greaterThan(new BigInteger(0), a)
    ? new BigInteger(JSBI.unaryMinus(a.value))
    : a;

export default absolute;
