import bigIntegerSubtract from "../bigInteger/subtract";
import ensureSameToken from "../token/ensureSameToken";
import QuantityInterface from "./QuantityInterface";
import createQuantity from "./createQuantity";

export const subtract = (...qties: QuantityInterface[]): QuantityInterface =>
  qties.reduce((a, b) => {
    ensureSameToken(a.token, b.token);

    return createQuantity(a.token, bigIntegerSubtract(a.quantity, b.quantity));
  });

export default subtract;
