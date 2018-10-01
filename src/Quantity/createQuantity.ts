import TokenInterface from "../Token/TokenInterface";
import QuantityInterface from "./QuantityInterface";

const createQuantity = (
  token: TokenInterface,
  quantity: BigInt
): QuantityInterface => ({
  ...token,
  quantity
});

export default createQuantity;
