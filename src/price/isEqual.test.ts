import PriceInterface from "./PriceInterface";
import isEqual from "./isEqual";
import display from "./display";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeEqual: (arg: PriceInterface) => {};
    }
  }
}

const toBeEqual = (received, expected) =>
  isEqual(received, expected)
    ? {
        pass: true,
        message: () =>
          `expected ${display(received)} to not equal ${display(expected)}`
      }
    : {
        pass: false,
        message: () =>
          `expected ${display(received)} to equal ${display(expected)}`
      };

test("toBeEqual", () => {});

export default toBeEqual;
