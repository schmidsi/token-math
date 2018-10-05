import isEqualBigInteger from "../bigInteger/isEqual";
import isSameToken from "../token/isSameToken";

import Quantity from "./Quantity";

const isEqual = (a: Quantity, b: Quantity) =>
  isSameToken(a, b) && isEqualBigInteger(a.quantity, b.quantity);

export default isEqual;
