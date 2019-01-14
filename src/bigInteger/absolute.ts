import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import greaterThan from "./greaterThan";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const absolute = (a: ConvertableBigInteger): BigInteger => {
  const aBI = toBI(a);
  return greaterThan(new BigInteger(0), aBI)
    ? new BigInteger(JSBI.unaryMinus(aBI.value))
    : aBI;
};

export default absolute;
