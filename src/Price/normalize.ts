import { divide, modulo, multiply, BigInteger, add } from "../bigInteger";
import { createQuantity } from "../quantity";
import IPrice from "./IPrice";

/**
 * Takes a price and normalizes it:
 * Brings the base quantity to 1.0 and changes the quote value accordingly.
 *
 * Warning: This is a destructive operation (?).
 *
 * Example: For a token with 4 decimals the normalized quantity is:
 * 100000
 */
const normalize = (price: IPrice): IPrice => {
  const factor = divide(
    new BigInteger(10 ** price.base.decimals),
    price.base.quantity
  );

  const rest = modulo(
    new BigInteger(10 ** price.base.decimals),
    price.base.quantity
  );

  const base = createQuantity(
    price.base,
    add(multiply(price.base.quantity, factor), rest)
  );

  const quote = createQuantity(
    price.quote,
    multiply(price.quote.quantity, factor)
  );

  return {
    base,
    quote
  };
};

export default normalize;
