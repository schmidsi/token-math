import BigInteger from "../bigInteger/BigInteger";
import { default as subtractBigInteger } from "../bigInteger/subtract";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as subtractQuantity } from "../quantity/subtract";

export type Subtract = {
  (...minuends: BigInteger[]): BigInteger;
  (...minuends: QuantityInterface[]): QuantityInterface;
};

const subtract: Subtract = (...minuends: any[]): any => {
  if (minuends[0] instanceof BigInteger && minuends[1] instanceof BigInteger) {
    return subtractBigInteger(...minuends);
  }

  if (isQuantity(minuends[0]) && isQuantity(minuends[1])) {
    return subtractQuantity(...minuends);
  }

  throw new TypeError(`"subtract" not implemented for ${typeof minuends[0]}`);
};

export default subtract;
