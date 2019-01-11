import appendDecimals from "../token/appendDecimals";
import createQuantity from "../quantity/createQuantity";
import divide from "../bigInteger/divide";
import multiply from "../bigInteger/multiply";
import power from "../bigInteger/power";
import toBI from "../bigInteger/toBI";

import PriceInterface from "./PriceInterface";

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
  const base = createQuantity(price.base.token, 1);

  const decimalsDifference =
    price.base.token.decimals - price.quote.token.decimals;

  const quoteQuantityIgnoreDecimals = divide(
    multiply(
      appendDecimals(price.quote.token, 1),
      price.quote.quantity,
      // Add the sum of quote + base decimals to prevent loss of information during division
      power(
        toBI(10),
        toBI(price.quote.token.decimals + price.base.token.decimals)
      )
    ),
    price.base.quantity
  );

  const decimalsDifferenceFactor = power(toBI(10), toBI(decimalsDifference));

  const withDecimalsCleaned = divide(
    decimalsDifference >= 0
      ? multiply(quoteQuantityIgnoreDecimals, decimalsDifferenceFactor)
      : divide(quoteQuantityIgnoreDecimals, decimalsDifferenceFactor),
    power(
      toBI(10),
      toBI(price.quote.token.decimals + price.base.token.decimals)
    )
  );

  const quote = createQuantity(price.quote.token, withDecimalsCleaned);

  return {
    base,
    quote
  };
};

export default normalize;
