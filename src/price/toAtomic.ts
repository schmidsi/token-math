import normalize from "./normalize";
import PriceInterface from "./PriceInterface";
import { BigInteger } from "bigInteger";

const toAtomic = (price: PriceInterface): BigInteger =>
  normalize(price).quote.quantity;

export default toAtomic;
