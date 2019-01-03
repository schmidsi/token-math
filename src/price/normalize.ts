import {
  divide,
  modulo,
  multiply,
  BigInteger,
  add,
  power
} from "../bigInteger";
import { createQuantity } from "../quantity";
import PriceInterface from "./PriceInterface";
import cancelDown from "./cancelDown";
import { quantity } from "index";
import toString from "bigInteger/toString";

/**
 * Takes a price and normalizes it:
 * Brings the base quantity to 1.0 and changes the quote value accordingly.
 *
 * Warning: This is a destructive operation (?).
 *
 * Example: For a token with 4 decimals the normalized base quantity is:
 * 10000
 */
const normalize = (price: PriceInterface): PriceInterface => {
  const cancelledDown = cancelDown(price);

  const factor =
    10 ** cancelledDown.base.token.decimals /
    parseFloat(`${cancelledDown.base.quantity}`);

  const base = createQuantity(
    cancelledDown.base.token,
    Math.round(factor * parseFloat(`${cancelledDown.base.quantity}`)).toString()
  );

  const quote = createQuantity(
    cancelledDown.quote.token,
    Math.round(
      factor * parseFloat(`${cancelledDown.quote.quantity}`)
    ).toString()
  );

  return {
    base,
    quote
  };
};

export default normalize;
