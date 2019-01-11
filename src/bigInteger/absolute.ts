import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import greaterThan from "./greaterThan";
import toBI from './toBI';

const absolute = (a: BigInteger): BigInteger => {
  const aBI = toBI(a);
  return greaterThan(new BigInteger(0), aBI)
    ? new BigInteger(JSBI.unaryMinus(aBI.value))
    : aBI;
};

export default absolute;
