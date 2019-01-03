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

  const factor = divide(
    power(
      new BigInteger(10),
      new BigInteger(cancelledDown.base.token.decimals)
    ),
    cancelledDown.base.quantity
  );

  const rest = modulo(
    power(
      new BigInteger(10),
      new BigInteger(cancelledDown.base.token.decimals)
    ),
    cancelledDown.base.quantity
  );

  const base = createQuantity(
    cancelledDown.base.token,
    add(multiply(cancelledDown.base.quantity, factor), rest)
  );

  const quote = createQuantity(
    cancelledDown.quote.token,
    multiply(cancelledDown.quote.quantity, factor)
  );

  return {
    base,
    quote
  };
};

export default normalize;
