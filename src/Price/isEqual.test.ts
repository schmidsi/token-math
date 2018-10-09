import IPrice from "./IPrice";
import isEqual from "./isEqual";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeEqual: (arg: IPrice) => {};
    }
  }
}

const displayPrice = price =>
  `${price.base.quantity}${price.base.symbol}/${price.quote.quantity}${
    price.quote.symbol
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

export default toBeEqual;
