import QuantityInterface from "./QuantityInterface";
import toString from "../bigInteger/toString";

const toFixed = (quantity: QuantityInterface, decimals: number = 6) => {
  const minDecimals = Math.min(decimals, quantity.token.decimals);
  const string = toString(quantity.quantity).padStart(quantity.token.decimals);
  const before = string.slice(0, -quantity.token.decimals).trim();
  const after = string
    .slice(-quantity.token.decimals)
    .slice(0, minDecimals)
    .replace(/ /gi, "0");
  const withDecimal = `${before || "0"}${after.length > 0 ? "." : ""}${after}`;
  return withDecimal;
};

export default toFixed;
