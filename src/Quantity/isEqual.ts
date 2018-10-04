import Quantity from "./Quantity";
import isSameToken from "../token/isSameToken";

const isEqual = (a: Quantity, b: Quantity) =>
  isSameToken(a, b) && a.quantity === b.quantity;

export default isEqual;
