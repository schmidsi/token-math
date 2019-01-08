import isEqualBigInteger from "../bigInteger/isEqual";
import { default as isEqualToken } from "../token/isEqual";

import QuantityInterface from "./QuantityInterface";

const isEqual = (a: QuantityInterface, b: QuantityInterface) =>
  isEqualToken(a.token, b.token) && isEqualBigInteger(a.quantity, b.quantity);

export default isEqual;
