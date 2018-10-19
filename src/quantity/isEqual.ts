import isEqualBigInteger from "../bigInteger/isEqual";
import isSameToken from "../token/isSameToken";

import QuantityInterface from "./QuantityInterface";

const isEqual = (a: QuantityInterface, b: QuantityInterface) =>
  isSameToken(a, b) && isEqualBigInteger(a.quantity, b.quantity);

export default isEqual;
