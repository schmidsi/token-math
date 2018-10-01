import ensureSameToken from "../Token/ensureSameToken";
import QuantityInterface from "./QuantityInterface";
import createQuantity from "./createQuantity";

export const subtract = (
  a: QuantityInterface,
  b: QuantityInterface
): QuantityInterface => {
  ensureSameToken(a, b);

  return createQuantity(a, a.quantity - b.quantity);
};

export default subtract;
