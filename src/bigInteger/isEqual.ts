import JSBI from "jsbi";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const isEqual = (a: ConvertableBigInteger, b: ConvertableBigInteger): boolean =>
  JSBI.equal(toBI(a).value, toBI(b).value);

export default isEqual;
