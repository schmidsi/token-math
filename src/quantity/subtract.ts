import bigIntegerSubtract from "../bigInteger/subtract";
import ensureSameToken from "../token/ensureSameToken";
import QuantityInterface from "./QuantityInterface";
import createQuantity from "./createQuantity";

export const subtract = (
  a: QuantityInterface,
  b: QuantityInterface
): QuantityInterface => {
  ensureSameToken(a, b);

  return createQuantity(a, bigIntegerSubtract(a.quantity, b.quantity));
};

export default subtract;
