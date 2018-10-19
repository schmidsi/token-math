import addBigInteger from "../bigInteger/add";
import ensureSameToken from "../token/ensureSameToken";
import QuantityInterface from "./QuantityInterface";
import createQuantity from "./createQuantity";

const add = (a: QuantityInterface, b: QuantityInterface): QuantityInterface => {
  ensureSameToken(a.token, b.token);

  return createQuantity(a.token, addBigInteger(a.quantity, b.quantity));
};

export default add;
