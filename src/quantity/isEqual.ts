import isEqualBigInteger from "../bigInteger/isEqual";
import isSameToken from "../token/isSameToken";

import IQuantity from "./IQuantity";

const isEqual = (a: IQuantity, b: IQuantity) =>
  isSameToken(a, b) && isEqualBigInteger(a.quantity, b.quantity);

export default isEqual;
