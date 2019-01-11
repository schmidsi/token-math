import QuantityInterface from "./QuantityInterface";
import isToken from "../token/isToken";
import BigInteger from "../bigInteger/BigInteger";

const isQuantity = (input: any): input is QuantityInterface =>
  input.token && isToken(input.token) && input.quantity instanceof BigInteger;

export default isQuantity;
