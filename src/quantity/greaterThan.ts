import greaterThanBigInteger from "../bigInteger/greaterThan";
import isEqual from "../token/isEqual";

import QuantityInterface from "./QuantityInterface";

const greaterThan = (a: QuantityInterface, b: QuantityInterface) =>
  isEqual(a.token, b.token) && greaterThanBigInteger(a.quantity, b.quantity);

export default greaterThan;
