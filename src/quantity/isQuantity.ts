import QuantityInterface from "./QuantityInterface";
import isToken from "../token/isToken";

const isQuantity = (input: any): input is QuantityInterface =>
  input.token && input.quantity && isToken(input.token)

export default isQuantity;
