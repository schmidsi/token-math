import addBigInteger from "../bigInteger/add";
import ensureSameToken from "../token/ensureSameToken";
import IQuantity from "./IQuantity";
import createQuantity from "./createQuantity";

const add = (a: IQuantity, b: IQuantity): IQuantity => {
  ensureSameToken(a, b);

  return createQuantity(a, addBigInteger(a.quantity, b.quantity));
};

export default add;
