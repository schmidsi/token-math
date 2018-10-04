import ensureSameToken from "../token/ensureSameToken";
import Quantity from "./Quantity";
import createQuantity from "./createQuantity";

export const subtract = (a: Quantity, b: Quantity): Quantity => {
  ensureSameToken(a, b);

  return createQuantity(a, a.quantity - b.quantity);
};

export default subtract;
