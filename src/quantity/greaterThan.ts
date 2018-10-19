import greaterThanBigInteger from "../bigInteger/greaterThan";
import isSameToken from "../token/isSameToken";

import QuantityInterface from "./QuantityInterface";

const greaterThan = (a: QuantityInterface, b: QuantityInterface) =>
  isSameToken(a.token, b.token) &&
  greaterThanBigInteger(a.quantity, b.quantity);

export default greaterThan;
