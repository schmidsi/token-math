// We only export BigInteger from bigInteger here and omit the helper functions
// to avoid confusion.
export { default as BigInteger } from "./bigInteger/BigInteger";

export { default as Quantity } from "./quantity/Quantity";
import add from "./quantity/add";
import createQuantity from "./quantity/createQuantity";
import subtract from "./quantity/subtract";
import isEqual from "./quantity/isEqual";
import greaterThan from "./quantity/greaterThan";

export const quantity = {
  add,
  createQuantity,
  subtract,
  isEqual,
  greaterThan
};

export { default as Token } from "./token/Token";
import appendDecimals from "./token/appendDecimals";
import createToken from "./token/createToken";
import ensureSameToken from "./token/ensureSameToken";
import isSameToken from "./token/isSameToken";

export const token = {
  appendDecimals,
  createToken,
  ensureSameToken,
  isSameToken
};
