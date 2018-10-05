import greaterThanBigInteger from "../bigInteger/greaterThan";
import isSameToken from "../token/isSameToken";

import Quantity from "./Quantity";

const greaterThan = (a: Quantity, b: Quantity) =>
  isSameToken(a, b) && greaterThanBigInteger(a.quantity, b.quantity);

export default greaterThan;
