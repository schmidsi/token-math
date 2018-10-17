import normalize from "./normalize";
import IPrice from "./IPrice";

const toAtomic = (price: IPrice): string =>
  normalize(price).quote.quantity.toString();

export default toAtomic;
