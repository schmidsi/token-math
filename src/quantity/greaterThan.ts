import greaterThanBigInteger from "../bigInteger/greaterThan";
import isSameToken from "../token/isSameToken";

import IQuantity from "./IQuantity";

const greaterThan = (a: IQuantity, b: IQuantity) =>
  isSameToken(a, b) && greaterThanBigInteger(a.quantity, b.quantity);

export default greaterThan;
