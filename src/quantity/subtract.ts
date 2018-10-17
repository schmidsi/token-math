import bigIntegerSubtract from "../bigInteger/subtract";
import ensureSameToken from "../token/ensureSameToken";
import IQuantity from "./IQuantity";
import createQuantity from "./createQuantity";

export const subtract = (a: IQuantity, b: IQuantity): IQuantity => {
  ensureSameToken(a, b);

  return createQuantity(a, bigIntegerSubtract(a.quantity, b.quantity));
};

export default subtract;
