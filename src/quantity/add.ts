import addBigInteger from "../bigInteger/add";
import ensureSameToken from "../token/ensureSameToken";
import QuantityInterface from "./QuantityInterface";
import createQuantity from "./createQuantity";

const add = (a: QuantityInterface, b: QuantityInterface): QuantityInterface => {
  ensureSameToken(a, b);

  return createQuantity(a, addBigInteger(a.quantity, b.quantity));
};

export default add;
