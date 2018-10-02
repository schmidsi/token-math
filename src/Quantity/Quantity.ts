import QuantityInterface from "./QuantityInterface";
import add from "./add";
import createQuantity from "./createQuantity";
import subtract from "./subtract";

class Quantity implements QuantityInterface {
  readonly quantity: BigInt;
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;

  constructor(quantity: QuantityInterface) {
    this.symbol = quantity.symbol;
    this.decimals = quantity.decimals;
    this.address = quantity.address;
    this.quantity = quantity.quantity;
  }

  static createQuantity = createQuantity;

  static add = add;
  add = quantity => add(this, quantity);

  static subtract = subtract;
  subtract = quantity => subtract(this, quantity);
}

export default Quantity;
