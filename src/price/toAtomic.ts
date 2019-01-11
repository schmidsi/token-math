import normalize from "./normalize";
import PriceInterface from "./PriceInterface";
import BigInteger from "../bigInteger/BigInteger";

const toAtomic = (price: PriceInterface): BigInteger =>
  normalize(price).quote.quantity;

export default toAtomic;
