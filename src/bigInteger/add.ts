import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import ConvertableBigInteger from "./ConvertableBigInteger";
import toBI from "./toBI";

const add = (...a: ConvertableBigInteger[]): BigInteger => {
  return a
    .map(toBI)
    .reduce(
      (carry, current) => new BigInteger(JSBI.add(carry.value, current.value)),
      new BigInteger(0)
    );
};

export default add;
