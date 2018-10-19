import normalize from "./normalize";
import PriceInterface from "./PriceInterface";

const toAtomic = (price: PriceInterface): string =>
  normalize(price).quote.quantity.toString();

export default toAtomic;
