import normalize from "./normalize";
import PriceInterface from "./PriceInterface";
import BigInteger from "../bigInteger/BigInteger";
import toBI from "../bigInteger/toBI";

const toAtomic = (price: PriceInterface): BigInteger =>
  toBI(normalize(price).quote.quantity);

export default toAtomic;
