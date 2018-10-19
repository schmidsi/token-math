import PriceInterface from "./PriceInterface";
import isEqual from "./isEqual";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeEqual: (arg: PriceInterface) => {};
    }
  }
}

const displayPrice = price =>
  `${price.base.quantity}${price.base.token.symbol}/${price.quote.quantity}${
    price.quote.token.symbol
  }`;

const toBeEqual = (received, expected) =>
  isEqual(received, expected)
    ? {
        pass: true,
        message: () =>
          `expected ${displayPrice(received)} to not equal ${displayPrice(
            expected
          )}`
      }
    : {
        pass: false,
        message: () =>
          `expected ${displayPrice(received)} to equal ${displayPrice(
            expected
          )}`
      };

test("toBeEqual", () => {});

export default toBeEqual;
