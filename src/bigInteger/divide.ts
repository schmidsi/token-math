import JSBI from "jsbi";
import BigInteger from "./BigInteger";
import toBI from "./toBI";

const divide = (a: BigInteger, ...b: BigInteger[]): BigInteger =>
  b.map(toBI).reduce(
    (carry, current) => new BigInteger(JSBI.divide(carry.value, current.value)),
    toBI(a),
  );

export default divide;
