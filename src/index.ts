export { default as Token } from "token/Token";
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

export { default as Quantity } from "quantity/Quantity";
import add from "./quantity/add";
import createQuantity from "./quantity/createQuantity";
import subtract from "./quantity/subtract";
import isEqual from "./quantity/isEqual";

export const quantity = {
  add,
  createQuantity,
  subtract,
  isEqual
};
