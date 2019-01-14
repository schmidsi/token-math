import isEqual from "./isEqual";
import toBI from "./toBI";
import ConvertableBigInteger from "./ConvertableBigInteger";

const isZero = (a: ConvertableBigInteger): boolean => isEqual(toBI(a), toBI(0));

export default isZero;
