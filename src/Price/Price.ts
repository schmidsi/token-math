import PriceInterface from "./PriceInterface";
import QuantityInterface from "../Quantity/QuantityInterface";
import getPrice from "./getPrice";
import toFixed from "./toFixed";
import valueIn from "./valueIn";

class Price implements PriceInterface {
  readonly base: QuantityInterface;
  readonly quote: QuantityInterface;

  constructor(price: PriceInterface) {
    const { base, quote } = getPrice(price.base, price.quote);
    this.base = base;
    this.quote = quote;
  }

  static getPrice = getPrice;

  static toFixed = toFixed;
  toFixed = decimals => toFixed(this, decimals);

  static valueIn = valueIn;
  valueIn = quantity => valueIn(this, quantity);
}

export default Price;
