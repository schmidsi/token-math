import QuantityInterface from "./QuantityInterface";
import isToken from "../token/isToken";
import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";

const isQuantity = (input: any): input is QuantityInterface =>
  input.token &&
  isToken(input.token) &&
  isConvertableBigInteger(input.quantity);

export default isQuantity;
