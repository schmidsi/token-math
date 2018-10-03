import QuantityInterface from "./QuantityInterface";
import Token from "../Token/index";
import add from "./add";
import createQuantity from "./createQuantity";
import isEqual from "./isEqual";
import subtract from "./subtract";

class Quantity implements QuantityInterface {
  readonly quantity: BigInt;
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;

  constructor(
    quantityOrToken: QuantityInterface | Token,
    quantityBigInt?: BigInt
  ) {
    const quantity =
      quantityOrToken instanceof Token
        ? createQuantity(quantityOrToken, quantityBigInt)
        : quantityOrToken;

    this.symbol = quantity.symbol;
    this.decimals = quantity.decimals;
    this.address = quantity.address;
    this.quantity = quantity.quantity;
  }

  static createQuantity = createQuantity;

  static add = add;
  add = quantity => new Quantity(add(this, quantity));

  static subtract = subtract;
  subtract = quantity => new Quantity(subtract(this, quantity));

  static isEqual = isEqual;
  isEqual = quantity => isEqual(this, quantity);
}

export default Quantity;
