import QuantityInterface from "./QuantityInterface";
import isSameToken from "../Token/isSameToken";

const isEqual = (a: QuantityInterface, b: QuantityInterface) =>
  isSameToken(a, b) && a.quantity === b.quantity;

export default isEqual;
